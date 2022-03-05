import React from 'react';
import { ErrorMessage, Field } from 'formik';

const _formField = (fieldKey, fieldLabel, hasError, touched, type = 'text') => (
    <div className="form-group">
        <label className="control-label" htmlFor={`field-${fieldKey}`}>
            {fieldLabel}
        </label>
        <Field
            type={type}
            name={fieldKey}
            id={`field-${fieldKey}`}
            className={`form-control ${
                hasError ? 'is-invalid' : touched ? 'is-valid' : ''
            }`}
        />
        <ErrorMessage
            name={fieldKey}
            component="div"
            className="invalid-feedback"
        />
    </div>
);

export const formField = (fieldKey, fieldLabel, hasError, touched) =>
    _formField(fieldKey, fieldLabel, hasError, touched, 'text');

export const formPasswordField = (fieldKey, fieldLabel, hasError, touched) =>
    _formField(fieldKey, fieldLabel, hasError, touched, 'password');
