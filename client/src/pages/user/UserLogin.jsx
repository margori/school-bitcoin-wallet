import React, { useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { UserLoginForm } from './UserLoginForm';
import { postLogin } from '../../endpoints/User';
import { LoginSchema } from '../../schemas/LoginSchema';
import { login } from '../../redux/user/userActions';
import { useNavigate } from 'react-router';
import sha1 from 'crypto-js/sha1';

export const processGetMyDataResponse = (data) => ({
    username: data.username,
    user_id: data.id,
});

const UserLogin = ({ dispatchLogin }) => {
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
});

export default connect(null, mapDispatchToProps)(UserLogin);
