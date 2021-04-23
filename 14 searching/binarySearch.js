function binarySearch(nums, target) {

    let start= 0;
    let end = nums.length - 1;
    while (true) {
    let middle = Math.floor(start + (end - start )/ 2);

    let current = nums[middle];

    if(target == current)
      return middle;

    if (start  == end)
      return -1;

    if (target > current) {
      start = middle + 1;
    }else {
      end = middle - 1;
    }
  }
}



let arr = [1,4,6,9, 12,34,45];
console.log(binarySearch(arr, 0));