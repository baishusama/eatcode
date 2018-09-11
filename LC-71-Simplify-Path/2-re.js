/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    var str = path
        .replace(/((^\.)|(\/\.))(?=\/|$)/g, '') // 去除开头的 '.' 和中间的 '/.'
        .replace(/\/+/g, '/');
    // console.log(`[test] initially, ${path}  ->  ${str}`); // TODO: test
    str = str.replace(/[^/]+\/+\.\.\//g, ''); // TODO: replace + /re/g !?!?!

    // // 如果以 '/' 结尾的话，去除
    // if (/.+\/+$/.test(result)) {
    //     result = result.slice(0, result.length - 1);
    // }
    // // 如果非 '/' 开头的话，补齐
    // if (/^[^/]/.test(result)) {
    //     result = '/' + result;
    // }

    return str || '/'; // 禁止返回空字符串
}

module.exports.simplifyPath = simplifyPath;
