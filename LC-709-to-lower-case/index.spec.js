const { toLowerCase } = require('./index.js');

const inputs = ['Hello', 'here', 'LOVELY'];
const outputs = ['hello', 'here', 'lovely'];

inputs.forEach((input, i) => {
    const ourOutput = toLowerCase(input);
    const rightOutput = outputs[i];
    console.log(ourOutput === rightOutput ? 'Correct! :)' : `"${ourOutput}" is wrong... :(`);
});
