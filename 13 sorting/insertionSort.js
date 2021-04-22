function insertionSort1(nums) {
  if (nums.length == 1)
    return;


  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    let other = nums[0];
    if (current <= other) { // check if before first
      moveBackwards(nums, i, 0);
      continue;
    }

    other = nums[i - 1];
    if (current >= other) { // check if after last
      continue;
    }

    for (let j = 0; j < i; j++) {
      other = nums[j];

      if (current < other) {
        moveBackwards(nums, i, j);
        break;
      }
    }
  }
}
function moveBackwards(nums, originalIndex, newIndex) {
  for (let i = originalIndex; i > newIndex; i--) {
    let tmpValue = nums[i];
    nums[i] = nums[i - 1];
    nums[i - 1] = tmpValue;
  }


}

function insertionSort2(nums) {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    let other = nums[0];
    if (current <= other) { // check if before first
      nums.splice(0, 0, current);
      nums.splice(i + 1, 1);
      continue;
    }

    other = nums[i - 1];
    if (current >= other) { // check if after last
      continue;
    }

    for (let j = 0; j < i; j++) {
      let other = nums[j];

      if (current < other) {
        nums.splice(j, 0, current);
        nums.splice(i + 1, 1);
        break;
      }
    }
  }
}

let nums = [6, 5, 3, 1, 8, 7, 2, 4];
insertionSort2(nums);
// nums = [6, 5, 3, 1, 8, 7, 2, 4];
// insertionSort2(nums);
console.log(nums);
