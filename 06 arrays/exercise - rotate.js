// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/description/

var rotate = function (nums, k) {
  if (0 == k || k == nums.length)
    return;

  if (k > nums.length)
    k = k % nums.length;

  var temp = [];

  var i = nums.length - 1;
  var j = i;

  while (j >= 0) {
    if (i >= 0) {
      var value = nums[i];

      if ((nums.length - i) <= k) {
        temp[nums.length - i - 1] = value;
      }
      else {
        if (i >= 0) {
          nums[j] = value;
          j--;
        }
      }
    }
    else {
      nums[j] = temp[Math.abs(i) - 1];
      j--;
    }

    i--;
  }
}
