  public static class MergeSorter
  {
    public static int[] MergeSort(int[] nums)
    {
      // if length > 2 then we need to divide
      if (nums.Length > 2)
      {
        double count = nums.Length / 2.0;

        // divide, leave remaining for the right side
        int[] leftSide = nums.Take((int)Math.Floor(count)).ToArray();
        int[] rightSide = nums.Skip(leftSide.Length).ToArray();

        // apply sorting to the divided
        leftSide = MergeSort(leftSide);
        rightSide = MergeSort(rightSide);

        // sort values from two sides into the main array
        int leftIndex = 0, rightIndex = 0;
        for (int i = 0; i < nums.Length; i++)
        {
          int? leftValue = leftIndex < leftSide.Length ? leftSide[leftIndex] : new int?();
          int? rightValue = rightIndex < rightSide.Length ? rightSide[rightIndex] : new int?();

          // if we finished the right side, or the left value is <= right
          if (rightValue == null || leftValue <= rightValue)
          {
            nums[i] = leftValue.Value;
            leftIndex++;
          }
          // if we finished the left side or the right value is < left
          else if (leftValue == null || rightValue < leftValue)
          {
            nums[i] = rightValue.Value;
            rightIndex++;
          }
        }
      }
      else if (nums.Length == 2)// length == 2, no need to divide
      {
        // sort
        if (nums[0] > nums[1])
        {
          int tmpValue = nums[0];
          nums[0] = nums[1];
          nums[1] = tmpValue;
        }
      }

      return nums;
    }
  }