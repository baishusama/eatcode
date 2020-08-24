const { singleNumber } = require('./index.js');

const inputs = [
    [2, 2, 1],
    [4, 1, 2, 1, 2],
];
const outputs = [1, 4];

inputs.forEach((input, i) => {
    const ourOutput = singleNumber(input);
    const rightOutput = outputs[i];
    console.log(ourOutput === rightOutput ? 'Correct! :)' : `"${ourOutput}" is wrong... :(`);
});
