// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function (nums) {
  if (!nums)
    throw "invalid input";
     
  let maxSubArray = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSubArray = Math.max(maxSubArray, sum);
    }
  }

  return maxSubArray;
}
