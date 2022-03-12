import React from 'react';
import { Form } from 'formik';
import {
    errorMessageDiv,
    successMessageDiv,
} from '../../utils/formMessageUtils';
import { formField, formPasswordField } from '../../utils/formFieldUtils';

export const WalletSendForm = (props) => {
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
                'toAddress',
                `To address`,
                errors.toAddress,
                touched.toAddress
            )}
            {formField('amount', `Amount`, errors.amount, touched.amount)}
            {formField('fee', `Fee`, errors.fee, touched.fee)}
            {errorMessageDiv(errorMessage)}
            {successMessageDiv(successMessage)}
            <div className="form-group">
                <button
                    id="unlock-button"
                    disabled={isValidating || isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                >
                    Send
                </button>
            </div>
        </Form>
    );
};
