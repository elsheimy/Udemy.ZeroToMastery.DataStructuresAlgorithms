# 217. Contains Duplicate
# https://leetcode.com/problems/contains-duplicate/description/

def containsDuplicate(nums):
  if (not nums or 0 == len(nums)):
    return False

  for i in range(len(nums)):
    val = nums[i]
    for j in range(i + 1, len(nums)):
      if nums[j] == val:
        return True

  return False


def containsDuplicate2(nums):
  if (not nums or 0 == len(nums)):
    return False

  lst = set()

  for i in range(len(nums)):
    val = nums[i]
    if val in lst:
      return True
    lst.add(val)

  return False
