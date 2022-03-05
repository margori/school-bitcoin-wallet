import { Form } from 'formik';
import React from 'react';
import {
    errorMessageDiv,
    successMessageDiv,
} from '../../utils/formMessageUtils';
import { formField, formPasswordField } from '../../utils/formFieldUtils';

export const UserLoginForm = (props) => {
    const {
        errors,
        touched,
        errorMessage,
        successMessage,
        isSubmitting,
        isValidating,
    } = props;
    return (
        <Form>
            {formField(
                'username',
                `Username`,
                errors.username,
                touched.username
            )}
            {formPasswordField(
                'password',
                `Password`,
                errors.password,
                touched.password
            )}
            {errorMessageDiv(errorMessage)}
            {successMessageDiv(successMessage)}
            <div className="form-group">
                <button
                    id="login-button"
                    disabled={isValidating || isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </div>
        </Form>
    );
};
