const { isPalindrome } = require('./index.js');

// raceacar
const inputs = ['A man, a plan, a canal: Panama', 'race a car'];
const outputs = [true, false];

inputs.forEach((input, i) => {
    const ourOutput = isPalindrome(input);
    const rightOutput = outputs[i];
    console.log(ourOutput === rightOutput ? 'Correct! :)' : `"${ourOutput}" is wrong... :(`);
});
