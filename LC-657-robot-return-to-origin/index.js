/**
 * @param {string} str
 * @return {string}
 */

/*
// 92 ms  42.3 MB
const judgeCircle = function (moves) {
    const pair1 = ['U', 'D'];
    const pair2 = ['L', 'R'];

    if (
        moves.split(pair1[0]).length === moves.split(pair1[1]).length &&
        moves.split(pair2[0]).length === moves.split(pair2[1]).length
    ) {
        return true;
    }

    return false;
};
*/

// 100 ms  41.3 MB
const judgeCircle = function (moves) {
    const moveDictX = {
        L: -1,
        R: +1,
    };
    const moveDictY = {
        U: +1,
        D: -1,
    };

    let x = 0;
    let y = 0;

    moves.split('').forEach((move) => {
        x += moveDictX[move] || 0;
        y += moveDictY[move] || 0;
    });

    return x === 0 && y === 0;
};

module.exports = { judgeCircle };
