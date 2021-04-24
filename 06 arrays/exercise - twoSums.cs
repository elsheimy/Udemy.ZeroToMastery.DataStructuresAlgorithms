// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

public int[] TwoSums(int[] nums, int target)
{
  for (int i = 0; i < nums.Length; i++)
  {
    for (int j = i + 1; j < nums.Length; j++)
    {
      if (nums[i] + nums[j] == target)
      {
        return new int[] { i, j };
      }
    }
  }
  throw new Exception("No solution");
}