import React from 'react';

const messageDiv = (type) => (message) =>
    message && (
        <div className="form-group">
            <div className={`alert alert-${type}`}>{message}</div>
        </div>
    );

export const errorMessageDiv = messageDiv('danger');
export const successMessageDiv = messageDiv('success');
