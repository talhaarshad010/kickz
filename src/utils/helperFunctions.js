import CryptoJS from 'crypto-js';
const decryptionKey = 'pswd';

export const decryptPassword = encryptedPassword => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, decryptionKey);
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
};
