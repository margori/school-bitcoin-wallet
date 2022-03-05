import * as Yup from 'yup';
import {
    isGoodPassword,
    maxPasswordLength,
    maxUsernameLength,
    minPasswordLength,
    minUsernameLength,
} from '../utils/isUtils';

export const usernameField = Yup.string()
    .required('Username is required!')
    .min(minUsernameLength, 'Username is too short!')
    .max(maxUsernameLength, 'Username is too long!')
    .trim();
export const emailField = Yup.string()
    .required('Email is required!')
    .email('Invalid email address!')
    .trim();
export const passwordField = Yup.string()
    .required('Password is required!')
    .min(minPasswordLength, 'Password is too short!')
    .max(maxPasswordLength, 'Password is too long!')
    .test(
        'is-good-password',
        'Password requires at least 8 characters, 1 upper case letter, 1 lowercase letter and 1 number!',
        (value) => isGoodPassword(value)
    );
