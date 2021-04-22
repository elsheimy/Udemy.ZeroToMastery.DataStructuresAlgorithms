    static int[] QuickSort(int[] nums, int startIdx, int length)
    {
      if (length <= 1)
        return nums;

      // take the far-most value as pivot
      int pivot = nums[startIdx + length - 1];
      int j = startIdx - 1;

      // compare all other items to the pivot
      for (int i = startIdx; i < (startIdx + length - 1); i++)
      {
        int current = nums[i];
        if (current < pivot)
        {

          // current is less than the pivot
          // ensure that it goes to the left
          // by the end of the loop we will have 
          // all less to the left and all bigger
          // to the right
          j++;

          nums[i] = nums[j];
          nums[j] = current;
        }
      }

      // move our pivot to the center
      j++;
      nums[startIdx + length - 1] = nums[j];
      nums[j] = pivot;


      // quic-sort, left
      QuickSort(nums, 0, j);
      // quic-sort, right
      QuickSort(nums, j + 1, length - j - 1);

      return nums;
    }
