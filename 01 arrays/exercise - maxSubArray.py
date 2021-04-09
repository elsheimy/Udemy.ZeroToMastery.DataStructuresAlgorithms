# 53. Maximum Subarray
# https://leetcode.com/problems/maximum-subarray/description/

class Solution(object):
  def maxSubArray(self, nums):
    if (not nums):
      raise ValueError("invalid input")

    maxSubArray = 0

    for i in range(len(nums)):
      sum = 0
      for j in range(i, len(nums)):
        sum += nums[j]
        maxSubArray = max(maxSubArray, sum)

    return maxSubArray