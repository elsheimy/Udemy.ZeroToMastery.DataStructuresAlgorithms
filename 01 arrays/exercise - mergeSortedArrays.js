

var mergeSortedArrays = function (arr1, arr2) {
  if (!arr1 || arr1.length == 0)
    return arr2;

  if (!arr2 || arr2.length == 0)
    return arr1;

  result = []

  arr1Idx = 0;
  arr2Idx = 0;

  while (true) {
    arr1Value = arr1[arr1Idx];
    arr2Value = arr2[arr2Idx];

    if (arr1Value && arr2Value) {
      if (arr1Value < arr2Value) {
        result.push(arr1Value);
        arr1Idx++;
      } else if (arr2Value < arr1Value) {
        result.push(arr2Value);
        arr2Idx++;
      } else {
        result.push(arr1Value);
        result.push(arr2Value);
        arr1Idx++;
        arr2Idx++;
      }
    } else if (arr1Value) {
      result.push(arr1Value);
      arr1Idx++;
    } else if (arr2Value) {
      result.push(arr2Value);
      arr2Idx++;
    } else {
      break;
    }
  }

  return result;
}