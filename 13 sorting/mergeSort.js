function mergeSort(nums) {
  // if length > 2 then we need to divide
  if (nums.length > 2) {
    let count = nums.length / 2.0;

    // divide, leave remaining for the right side
    let leftSide = nums.slice(0, Math.floor(count));
    let rightSide = nums.slice(leftSide.length);

    // apply sorting to the divided
    leftSide = mergeSort(leftSide);
    rightSide = mergeSort(rightSide);

    // sort values from two sides into the main array
    let leftIndex = 0, rightIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      let leftValue = leftSide[leftIndex];
      let rightValue = rightSide[rightIndex];

      // if we finished the right side, or the left value is <= right
      if (rightValue == undefined || leftValue <= rightValue) {
        nums[i] = leftValue;
        leftIndex++;
      }
      // if we finished the left side or the right value is < left
      else if (leftValue == undefined || rightValue < leftValue) {
        nums[i] = rightValue;
        rightIndex++;
      }
    }
  }
  else if (nums.length == 2) // length == 2, no need to divide
  {
    // sort
    if (nums[0] > nums[1]) {
      let tmpValue = nums[0];
      nums[0] = nums[1];
      nums[1] = tmpValue;
    }
  }

  return nums;
}

let arr = [6, 5, 3, 1, 8, 7, 2, 4, 0];
console.log(mergeSort(arr));
