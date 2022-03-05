import { postRequest } from './requestsFn';

export const postRegister = postRequest(`/user/register`);

export const postLogin = postRequest(`/user/login`);

export const postLogout = postRequest(`/user/logout`);
