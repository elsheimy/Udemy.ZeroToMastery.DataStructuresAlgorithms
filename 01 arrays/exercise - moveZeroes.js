// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/

var moveZeroes = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (0 == nums[i]) {
      for (let j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      nums[nums.length - 1] = 0;
    }
  }
};

