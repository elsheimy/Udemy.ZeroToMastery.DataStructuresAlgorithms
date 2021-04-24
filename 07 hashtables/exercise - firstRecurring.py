def firstRecurring(nums):
  cache =  []
  for i in nums:
    if i in cache:
      return i
    cache.append(i)
  return None


print(firstRecurring([1,2,5,5,6,7]))