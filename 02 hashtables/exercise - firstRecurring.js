const firstRecurring = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let itm = nums[i];

    if (set.has(itm))
      return itm;

    set.add(itm);
  }

  return undefined;
}
