/**
 * @param {string} str
 * @return {string}
 */


// 88 ms  36.9 MB
const toLowerCase = function (str) {
    return str.toLowerCase();
};

/*
// 84 ms  37.1 MB
const toLowerCase = function (str) {
    return str.split('')
        .map((char) => {
            const charCode_A = 'A'.charCodeAt(0);
            const charCode_Z = 'Z'.charCodeAt(0);
            const charCode_a = 'a'.charCodeAt(0);
            // const charCode_z = 'z'.charCodeAt(0);

            const charCode = char.charCodeAt(0);

            if (charCode >= charCode_A && charCode <= charCode_Z) {
                const lowerCaseCharCode = charCode - charCode_A + charCode_a;
                return String.fromCharCode(lowerCaseCharCode);
            }

            return char;
        })
        .join('');
};
*/

/*
// 84 ms  37 MB
const toLowerCase = function (str) {
    return str.replace(/[A-Z]/g, function ([char]) {
        const charCode_A = 'A'.charCodeAt(0);
        const charCode_a = 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const lowerCaseCharCode = charCode - charCode_A + charCode_a;
        return String.fromCharCode(lowerCaseCharCode);
    });
};
*/

module.exports = { toLowerCase };
