import React, { useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { postRegister } from '../../endpoints/User';
import { RegisterSchema } from '../../schemas/RegisterSchema';
import { UserRegisterForm } from './UserRegisterForm';

const UserRegister = ({ history }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (values, actions) => {
        setSuccessMessage('');
        setErrorMessage('');
        postRegister({
            username: values.username,
            password: values.password,
        })
            .then((response) => {
                actions.setSubmitting(false);
                setSuccessMessage(response.data.message);
                history.push('/');
            })
            .catch((error) => {
                actions.setSubmitting(false);
                setErrorMessage(error.response.data.message);
            });
        actions.setSubmitting(true);
    };

    return (
        <div className="user-register-page col-md-12">
            <h2>Register</h2>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
            >
                {(props) =>
                    UserRegisterForm({ ...props, errorMessage, successMessage })
                }
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    language: state.user.language,
});

export default connect(mapStateToProps)(UserRegister);
