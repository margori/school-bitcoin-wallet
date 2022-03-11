import { getRequest, postRequest } from './requestsFn';

export const postSaveWif = postRequest(`/wallet/save-wif`);

export const getWifs = getRequest(`/wallet/get-wifs`);
