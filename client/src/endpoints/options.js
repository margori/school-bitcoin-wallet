import { apiUrl } from '../utils/params';

let _baseUrl = apiUrl;
let _timeout = 10000;
let _token = '';

export const getOptions = () => {
    return {
        baseURL: _baseUrl,
        timeout: _timeout,
        headers: _token ? { authorization: 'Bearer ' + _token } : {},
    };
};
