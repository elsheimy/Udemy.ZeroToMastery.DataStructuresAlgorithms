// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/description/


public class Solution {
  public  void rotate(int[] nums, int k)
  {
    if (0 == k || nums.Length == k)
      return;

    if (k > nums.Length)
      k = k % nums.Length;

    int[] temp = new int[k];

    int i = nums.Length - 1;
    int j = i;

    while (j >= 0)
    {
      if (i >= 0)
      {
        var value = nums[i];

        if ((nums.Length - i) <= k)
          temp[nums.Length - i - 1] = value;
        else
        {
          if (i >= 0)
          {
            nums[j] = value;
            j--;
          }
        }
      }
      else
      {
        nums[j] = temp[Math.Abs(i) - 1];
        j--;
      }

      i--;
    }
  }
}