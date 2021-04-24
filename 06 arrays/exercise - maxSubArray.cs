// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

public int maxSubArray(int[] nums)
{
  if (null == nums)
    throw new ArgumentNullException(nameof(nums));

  int maxSubArray = 0;

  for (var i = 0; i < nums.Length; i++)
  {
    var sum = 0;
    for (var j = i; j < nums.Length; j++)
    {
      sum += nums[j];
      maxSubArray = Math.Max(maxSubArray, sum);
    }
  }

  return maxSubArray;
}