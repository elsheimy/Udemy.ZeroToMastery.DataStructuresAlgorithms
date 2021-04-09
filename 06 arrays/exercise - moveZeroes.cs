// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/

public class Solution {
    public void MoveZeroes(int[] nums) {
        for (int i = nums.Length - 2; i >= 0; i--)
        {
          if (nums[i] == 0)
          {
            for (int j = i + 1; j < nums.Length; j++)
            {
              nums[j - 1] = nums[j];
            }
            nums[nums.Length - 1] = 0;
          }
        }
    }
}