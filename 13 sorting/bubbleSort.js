function bubbleSort(nums) {
  let lastIndex = nums.length - 1;

  while (lastIndex > 0) {
    let tmpVal = 0;
    let hasChanges = false;

    for (let i = 0; i < lastIndex; i++) {
      let firstVal = nums[i];
      let secondVal = nums[i + 1];

      if (firstVal > secondVal) {
        nums[i] = secondVal;
        nums[i + 1] = firstVal;
        hasChanges = true;
      }
    }
    if (!hasChanges)
      break;
    lastIndex--;
  }
}


let nums = [6, 5, 3, 1, 8, 7, 2, 4];
bubbleSort(nums);
console.log(nums);