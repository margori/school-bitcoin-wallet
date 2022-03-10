import React, { useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { WalletUnlockForm } from './WalletUnlockForm';
import sha1 from 'crypto-js/sha1';
import { WalletUnlockSchema } from '../../schemas/WalletUnlockSchema';
import { unlock } from '../../redux/wallet/walletActions';
import { useNavigate } from 'react-router';

const WalletUnlock = ({ password_hash, dispatchUnlock }) => {
    let navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (values, actions) => {
        setSuccessMessage('');
        setErrorMessage('');

        const hash = sha1(values.password).toString();
        if (hash == password_hash) {
            dispatchUnlock(values.password);
            navigate('/', { replace: true });
        } else {
            actions.setErrors({ password: 'Wrong password' });
        }

        actions.setSubmitting(false);
    };

    return (
        <div className="user-register-page col-md-12">
            <h2>Unlock wallet</h2>
            <Formik
                initialValues={{
                    password: '',
                }}
                validationSchema={WalletUnlockSchema}
                onSubmit={onSubmit}
            >
                {(props) =>
                    WalletUnlockForm({ ...props, errorMessage, successMessage })
                }
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    password_hash: state.user.password_hash,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchUnlock: (password) => dispatch(unlock(password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletUnlock);
