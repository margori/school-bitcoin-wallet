import axios from 'axios';
import { getOptions } from './options';

export const postRequest = (url) => (data) =>
    axios.post(url, data, getOptions());
export const getRequest = (url) => () => axios.get(url, getOptions());
