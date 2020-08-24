const { judgeCircle } = require('./index.js');

const inputs = ['UD', 'LL'];
const outputs = [true, false];

inputs.forEach((input, i) => {
    const ourOutput = judgeCircle(input);
    const rightOutput = outputs[i];
    console.log(ourOutput === rightOutput ? 'Correct! :)' : `"${ourOutput}" is wrong... :(`);
});
