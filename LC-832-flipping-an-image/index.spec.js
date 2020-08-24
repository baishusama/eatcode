const { flipAndInvertImage } = require('./index.js');

const inputs = [
    [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
    ],
    [
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
    ],
];
const outputs = [
    [
        [1, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [1, 0, 1, 0],
    ],
];

inputs.forEach((input, i) => {
    const ourOutput = flipAndInvertImage(input);
    const rightOutput = outputs[i];
    console.log(
        JSON.stringify(ourOutput) === JSON.stringify(rightOutput)
            ? 'Correct! :)'
            : `"${JSON.stringify(ourOutput)}" is wrong... :(`
    );
});
