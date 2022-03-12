import { string } from 'yup';
import { maxPasswordLength, minPasswordLength } from './fieldConstants';
import { isGoodPassword } from './isUtils';

export const passwordField = string()
    .required('Password is required!')
    .min(minPasswordLength, 'Password is too short!')
    .max(maxPasswordLength, 'Password is too long!')
    .test(
        'is-good-password',
        'Password requires at least 8 characters, 1 upper case letter, 1 lowercase letter and 1 number!',
        (value) => isGoodPassword(value)
    );
