export const API_BASE_URL = 'http:// 192.168.1.102:3000';
export const PRODUCTS_API_BASE_URL = 'https://dummyjson.com';
// export const API_BASE_URL = 'http://192.168.150.238:3000';
export const getAPiurl = endpoint => API_BASE_URL + endpoint;
export const Sign_UP = getAPiurl('/SignUp');
export const LOG_IN = getAPiurl('/LogIn');
