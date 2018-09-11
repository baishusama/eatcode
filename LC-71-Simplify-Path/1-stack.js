/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    var results = [];
    var segList = path.split(/\/+/); // 在这里相当于直接将多个 '/' 化简为一个
    for (var i = 0, len = segList.length; i < len; i++) {
        var seg = segList[i];
        if (seg === '..') {
            results.pop();
        } else if (seg === '.') {
            // do nothing..
        } else {
            results.push(seg);
        }
    }

    var result = results.join('/');

    // 如果以 '/' 结尾的话，去除
    if (/.+\/+$/.test(result)) {
        result = result.slice(0, result.length - 1);
    }
    // 如果非 '/' 开头的话，补齐
    if (/^[^/]/.test(result)) {
        result = '/' + result;
    }

    return result || '/'; // 禁止返回空字符串
}

module.exports.simplifyPath = simplifyPath;
