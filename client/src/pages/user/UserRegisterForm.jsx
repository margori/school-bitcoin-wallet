import React from 'react';
import { Form } from 'formik';
import {
    errorMessageDiv,
    successMessageDiv,
} from '../../utils/formMessageUtils';
import { formField, formPasswordField } from '../../utils/formFieldUtils';

export const UserRegisterForm = (props) => {
    const {
        touched,
        errors,
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
                    id="submit-register-button"
                    disabled={isValidating || isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </div>
        </Form>
    );
};
