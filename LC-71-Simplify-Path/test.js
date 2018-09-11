// const { simplifyPath } = require('./1-stack');
const { simplifyPath } = require('./2-re');

[
    '',
    '.',
    './',
    './.',
    './a/./b/.',
    '/',
    '/..',
    '///',
    '/a///b/c//',
    '/a/b/../../c/d',
    '/a/b/.././c/d'
].forEach(path => console.log(`${path}  ->  ${simplifyPath(path)}`));
