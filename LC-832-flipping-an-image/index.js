/**
 * @param {string} str
 * @return {string}
 */

/*
// 92 ms  39.5 MB
const flipAndInvertImage = function (matrix) {
    const newMatrix = [];

    matrix.forEach((line) => {
        const lineTmp = line.slice().reverse();
        newMatrix.push(lineTmp.map((bool) => (bool + 1) % 2));
    });

    return newMatrix;
};
*/

/*
// 84 ms  39.7 MB
const flipAndInvertImage = function (matrix) {
    const newMatrix = [];

    matrix.forEach((line) => {
        const newLine = [];
        for (let i = line.length; i > 0; i--) {
            newLine.push((line[i - 1] + 1) % 2);
        }
        newMatrix.push(newLine);
    });

    return newMatrix;
};
*/

// 	92 ms  39.8 MB
const flipAndInvertImage = function (matrix) {
    const newMatrix = [];

    while (matrix.length) {
        const newLine = [];
        const line = matrix.shift();
        while (line.length) {
            newLine.push((line.pop() + 1) % 2);
        }
        newMatrix.push(newLine);
    }

    return newMatrix;
};

module.exports = { flipAndInvertImage };
