# 283. Move Zeroes
# https://leetcode.com/problems/move-zeroes/description/

class Solution(object):
  def moveZeroes(self, nums):
    for i in reversed(range(len(nums) - 1)):
      if (0 == nums[i]):
        for j in range(i+1, len(nums)):
          nums[j-1] = nums[j]
        nums[-1] = 0
