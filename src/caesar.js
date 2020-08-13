// 97 - 122 lower case letters
// 65 - 90 upper case letters

const caesar = (word, key) => {
  let cipher = '';
  for (let i = 0; i < word.length; i += 1) {
    const charCode = word.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      if ((charCode + key > 122) || (charCode + key > 90 && charCode < 97)) {
        cipher += String.fromCharCode(charCode + key - 26);
      } else {
        cipher += String.fromCharCode(charCode + key);
      }
    } else {
      cipher += word[i];
    }
  }
  return cipher;
};
module.exports = caesar;
