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
