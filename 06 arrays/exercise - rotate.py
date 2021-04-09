# 189. Rotate Array
# https://leetcode.com/problems/rotate-array/description/

class Solution(object):
  def rotate(self, nums, k):
    length = len(nums)

    if (0 == k or k == length):
      return

    if (k > length):
      k = k % length

    temp = [None] * k

    i = length - 1
    j = i

    while (j >= 0):
      if (i >= 0):
        value = nums[i]

        if ((length - i) <= k):
          temp[length - i - 1] = value
        else:
          if (i >= 0):
            nums[j] = value
            j -= 1
      else:
        nums[j] = temp[abs(i) - 1]
        j -= 1

      i -= 1
