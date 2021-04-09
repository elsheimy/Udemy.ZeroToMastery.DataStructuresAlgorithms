// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
  if (!nums || nums.length == 0)
    return false;

  var hash = {};

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    if (hash[val])
      return true;

    hash[val] = true;
  }

  return false;
}

var containsDuplicate2 = function(nums) {
  if (!nums || nums.length == 0)
    return false;

  for (let i = 0; i < nums.length; i++) {
    val = nums[i];
    for (let j = i + 1;j < nums.length; j++) {
      if (val == nums[j])
        return true;
    }
  }

  return false;
}
