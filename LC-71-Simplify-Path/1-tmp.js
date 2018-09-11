const paths = ['/a/b/../../c/d', '/a/b/../../c/d/../../e/f'];

function getAbsolutePath(path) {
    const result = [];
    for (const p of path.split('/')) {
        if (p === '..') {
            result.pop();
        } else {
            result.push(p);
        }
    }
    return result.join('/');
}

paths.forEach(path => console.log(getAbsolutePath(path)));
