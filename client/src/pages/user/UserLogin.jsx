import React, { useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { UserLoginForm } from './UserLoginForm';
import { postLogin } from '../../endpoints/User';
import { LoginSchema } from '../../schemas/LoginSchema';
import { login } from '../../redux/user/userActions';
import { useNavigate } from 'react-router';
import sha1 from 'crypto-js/sha1';
import { getWifs } from '../../endpoints/Wallet';
import CryptoJS from 'crypto-js';
import { setAddresses, setWifs } from '../../redux/wallet/walletActions';
import { addressesFromWifs } from '../../utils/addressUtils';

export const processGetMyDataResponse = (data) => ({
    username: data.username,
    user_id: data.id,
});

const UserLogin = ({ dispatchLogin, dispatchSetAddresses }) => {
    let navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = (values, actions) => {
        setErrorMessage('');
        setSuccessMessage('');

        postLogin({
            username: values.username,
            password: values.password,
        })
            .then((response) => {
                setSuccessMessage(`Login successful`);
                actions.setSubmitting(false);
                const user = processGetMyDataResponse(response.data.data);
                user.password_hash = sha1(values.password).toString();
                dispatchLogin(user);

                getWifs()
                    .then((response) => {
                        if (response.data.data.length == 0) {
                            return;
                        }
                        const safeWifs = response.data.data;
                        const wifs = safeWifs.map((safeWif) => {
                            return CryptoJS.AES.decrypt(
                                safeWif,
                                values.password
                            ).toString(CryptoJS.enc.Utf8);
                        });
                        const addresses = addressesFromWifs(wifs);
                        dispatchSetAddresses(addresses);
                    })
                    .catch((e) => {
                        console.error(e);
                    });

                navigate('/', { replace: true });
            })
            .catch((error) => {
                console.log(error);
                actions.setSubmitting(false);
                setErrorMessage(error.response.data.message);
            });
        actions.setSubmitting(true);
    };

    return (
        <div className="user-login-page col-md-12">
            <h2>Login</h2>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                {(props) =>
                    UserLoginForm({ ...props, errorMessage, successMessage })
                }
            </Formik>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: (user) => dispatch(login(user)),
    dispatchSetAddresses: (addresses) => dispatch(setAddresses(addresses)),
});

export default connect(null, mapDispatchToProps)(UserLogin);
