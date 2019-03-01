import CryptoJS from 'crypto-js/crypto-js'
//生成随机字符串
export function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
export function Decrypt(word) {
  let key = CryptoJS.enc.Utf8.parse(window.sessionStorage.getItem('key'));
  let iv = CryptoJS.enc.Utf8.parse(window.sessionStorage.getItem('iv'));

  let base64 = CryptoJS.enc.Base64.parse(word);
  let src = CryptoJS.enc.Base64.stringify(base64);

  var decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });

  var decryptedStr = decrypt.toString(CryptoJS.enc.Latin1);

  return JSON.parse(decryptedStr.toString());
}
