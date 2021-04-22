
static int[] RadixSort(int[] nums)
{
  if (nums.Length <= 1)
    return nums;

  int radix = 10; // base  10
  int k = FindMaxLength(nums); // max digit count
  int coefficient = 1; // used to find the digit at the 'n'th location

  List<int>[] bucket = new List<int>[radix];
  int pass = 1;

  while (true)
  {
    // full pass through the array
    for (int i = 0; i < nums.Length; i++)
    {
      int current = nums[i]; // current value
      int targetDigit = (int)Math.Floor(((decimal)current / coefficient) % 10); // find the 'n'th digit

      // initialize bucket
      if (null == bucket[targetDigit])
        bucket[targetDigit] = new List<int>(nums.Length);

      // add current value,
      // radix a stable sorting algorithm, we maintain the order
      bucket[targetDigit].Add(current);
    }

    // copy list to the original array
    MoveBucketToArray(bucket, nums);

    if (pass == k) // if final pass, break
      break;

    pass++;
    coefficient *= 10;
  }


  return nums;
}

private static void MoveBucketToArray(List<int>[] bucket, int[] nums )
{
  int j = 0;
  for (int i = 0; i < bucket.Length; i++)
  {
    List<int> lst = bucket[i];
    if (null == lst)
      continue;

    foreach (int val in lst)
    {
      nums[j] = val;
      j++;
    }

    bucket[i] = null;
  }
}

private static int FindMaxLength(int[] nums)
{
  int max = 0;
  foreach(int i in nums) {
    var len = (int)Math.Ceiling(Math.Log10(i + 1));
    if (len > max)
      max = len;
  }
  return max;
}