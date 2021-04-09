class Solution(object):
  def mergeSortedArrays(self, arr1, arr2):
    if (not arr1 or len(arr1) == 0):
      return arr2

    if (not arr2 or len(arr2) == 0):
      return arr1

    result = []

    arr1Idx = 0
    arr2Idx = 0

    arr1Len = len(arr1)
    arr2Len = len(arr2)

    while True:
      arr1Value = arr1[arr1Idx] if arr1Idx < arr1Len else None
      arr2Value = arr2[arr2Idx] if arr2Idx < arr2Len else None

      if (arr1Value and arr2Value):
        if (arr1Value < arr2Value):
          result.append(arr1Value)
          arr1Idx += 1
        elif (arr2Value < arr1Value):
          result.append(arr2Value)
          arr2Idx += 1
        else:
          result.append(arr1Value)
          result.append(arr2Value)
          arr1Idx += 1
          arr2Idx += 1
      elif (arr1Value):
        result.append(arr1Value)
        arr1Idx += 1
      elif (arr2Value):
        result.append(arr2Value)
        arr2Idx += 1
      else:
        break

    return result
