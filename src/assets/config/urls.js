export const API_BASE_URL = 'http://192.168.1.104:3000';

export const getAPiurl = endpoint => API_BASE_URL + endpoint;

export const Sign_UP = getAPiurl('/UserSignup');
export const LOG_IN = getAPiurl('/UserLogin');
