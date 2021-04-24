// https://leetcode.com/problems/house-robber/


var rob = function (nums) {
  if (nums.length == 0)
    return 0;
  if (nums.length == 1)
    return nums[0];
  if (nums.length == 2)
    return Math.max(nums[0], nums[1]);


  let even = 0;
  let odd = 0;


  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0)
      even = Math.max(odd, even + nums[i]);
    else
      odd = Math.max(even, odd + nums[i]);
  }

  return Math.max(even, odd);
};

console.log(rob([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(rob([1, 2]));
// console.log(rob([2, 1, 1, 2]));
// console.log(rob([2, 8, 9, 0]));
// console.log(rob([2, 9, 2]));
// console.log(rob([2, 9, 2, 9]));