/**
 * @param {string} str
 * @return {string}
 */

/*
// 84 ms  39.1 MB
const isPalindrome = function (s) {
    const charList = s
        .toLowerCase()
        .split('')
        .filter((char) => /[0-9a-z]/.test(char));
    while (charList.length > 1) {
        const l = charList.shift();
        const r = charList.pop();
        if (l !== r) {
            return false;
        }
    }
    return true;
};
*/

// 120 ms  46.1 MB
const isPalindrome = function (s) {
    const charList = s
        .toLowerCase()
        .split('')
        .filter((char) => /[0-9a-z]/.test(char));

    const L = charList.length;
    const l = (L - (L % 2)) / 2;
    for (let i = 0; i < l; i++) {
        if (charList[i] !== charList[L - 1 - i]) {
            return false;
        }
    }

    return true;
};

module.exports = { isPalindrome };
