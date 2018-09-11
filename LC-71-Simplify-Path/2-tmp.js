const paths = ['/a/b/../../c/d', '/a/b/../../c/d/../../e/f'];

function getAbsolutePath(path) {
    let str = path;
    while (/[^/]+\/\.\.\//.test(str)) {
        str = str.split(/[^/]+\/\.\.\//).join('');
    }
    return str;
}

paths.forEach(path => console.log(getAbsolutePath(path)));
