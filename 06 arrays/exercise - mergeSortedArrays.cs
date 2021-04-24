public int[] mergeSortedArrays(int[] arr1, int[] arr2)
{
  if (null == arr1 || arr1.Length == 0)
    return arr2;

  if (null == arr2 || arr2.Length == 0)
    return arr1;

  int[] result = new int[arr1.Length + arr2.Length];

  int arr1Idx = 0;
  int arr2Idx = 0;
  int idx = 0;

  while (true)
  {
    int? arr1Value =arr1Idx < arr1.Length ?  arr1[arr1Idx] : new int?();
    int? arr2Value = arr2Idx < arr2.Length ? arr2[arr2Idx]: new int?();

    if (null != arr1Value && null != arr2Value)
    {
      if (arr1Value < arr2Value)
      {
        result[idx++] = arr1Value.Value;
        arr1Idx++;
      }
      else if (arr2Value < arr1Value)
      {
        result[idx++] = arr2Value.Value;
        arr2Idx++;
      }
      else
      {
        result[idx++] = arr1Value.Value;
        result[idx++] = arr2Value.Value;
        arr1Idx++;
        arr2Idx++;
      }
    }
    else if (null != arr1Value)
    {
        result[idx++] = arr1Value.Value;
      arr1Idx++;
    }
    else if (null !=  arr2Value)
    {
        result[idx++] = arr2Value.Value;
      arr2Idx++;
    }
    else
    {
      break;
    }
  }

  return result;
}