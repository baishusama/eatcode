/**
 * @param {string} str
 * @return {string}
 */

// 84 ms  39.1 MB
const singleNumber = function (nums) {
    return nums.sort().find((num, i) => {
        return num !== nums[i - 1] && num !== nums[i + 1];
    });
};

module.exports = { singleNumber };
