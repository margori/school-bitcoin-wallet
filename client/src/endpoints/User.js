import { getRequest, postRequest } from './requestsFn';

export const postRegister = postRequest(`/user/register`);

export const getMyData = getRequest('/user/my-data');

export const postMyData = postRequest('/user/set-my-data');

export const postSetPassword = postRequest('/user/set-password');

export const postRecoverRequest = postRequest('/user/recover-request');

export const postRecoverFulfill = postRequest('/user/recover-fulfill');
