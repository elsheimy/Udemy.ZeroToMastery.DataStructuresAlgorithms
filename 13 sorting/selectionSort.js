function selectionSort(nums) {

  for (let i = 0; i < nums.length; i++) {
    // pick the smallest value
    let smallestIndex = i;
    let smallestValue = nums[i];
    for (let j = i; j < nums.length; j++) {
      let newValue = nums[j];

      if (newValue < smallestValue ){
        // found the smallest, let's move it to 
        // the next available slot
        smallestIndex = j;
        smallestValue = nums[j];
      }
    }
    
    let tmpValue = nums[i];
    nums[i] = smallestValue;
    nums[smallestIndex] = tmpValue;

    console.log(nums);
  }
}


let nums = [6, 5, 3, 1, 8, 7, 2, 4];
selectionSort(nums);
console.log(nums);