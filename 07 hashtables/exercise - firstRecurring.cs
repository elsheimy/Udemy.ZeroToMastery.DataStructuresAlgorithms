public int? firstRecurring(int[] nums)
{
  List<int> set = new List<int>(nums.Length);
  for (int i = 0; i < nums.Length; i++)
  {
    int itm = nums[i];

    if (set.Contains(itm))
      return itm;

    set.Add(itm);
  }

  return null;
}