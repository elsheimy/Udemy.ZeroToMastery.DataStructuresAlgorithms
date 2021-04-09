// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

public class Solution {
    public  bool ContainsDuplicate(int[] nums)
    {
      if (null == nums || 0 == nums.Length)
        return false;

      System.Collections.Generic.HashSet<int> set = new System.Collections.Generic.HashSet<int>(nums.Length);

      for (int i = 0; i < nums.Length; i++)
      {
        int val = nums[i];
        
        bool found = set.Add(val);

        if (found)
          return true;
      }

      return false;
    }
}