import React from 'react';
import { Form } from 'formik';
import {
    errorMessageDiv,
    successMessageDiv,
} from '../../utils/formMessageUtils';
import { formPasswordField } from '../../utils/formFieldUtils';

export const WalletUnlockForm = (props) => {
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
                    id="unlock-button"
                    disabled={isValidating || isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                >
                    Unlock
                </button>
            </div>
        </Form>
    );
};
