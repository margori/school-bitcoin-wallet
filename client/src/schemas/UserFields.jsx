import { string } from 'yup';
import { maxUsernameLength, minUsernameLength } from './fieldConstants';

export const usernameField = string()
    .required('Username is required!')
    .min(minUsernameLength, 'Username is too short!')
    .max(maxUsernameLength, 'Username is too long!')
    .trim();
export const emailField = string()
    .required('Email is required!')
    .email('Invalid email address!')
    .trim();
