function radixSort(nums) {
  if (nums.length <= 1)
    return nums;

  // let radix = 10; // base  10
  let k = findMaxLength(nums); // max digit count
  let coefficient = 1; // used to find the digit at the 'n'th location

  let bucket = [];
  let pass = 1;

  while (true) {
    // full pass through the array
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i]; // current value
      let targetDigit = Math.floor((current / coefficient) % 10); // find the 'n'th digit

      // initialize bucket
      if (undefined == bucket[targetDigit])
        bucket[targetDigit] = [];

      // add current value,
      // radix a stable sorting algorithm, we maintain the order
      bucket[targetDigit].push(current);
    }

    // copy list to the original array
    moveBucketToArray(bucket, nums);


    if (pass == k) // if final pass, break
      break;

    pass++;
    coefficient *= 10;
  }


  return nums;
}

function moveBucketToArray(bucket, nums) {
  let j = 0;
  for (let i = 0; i < bucket.length; i++) {
    let lst = bucket[i];
    if (undefined == lst)
      continue;

    lst.forEach(function (val, idx) {
      nums[j] = val;
      j++;
    });

    bucket[i] = undefined;
  }
}

function findMaxLength(nums) {
  // find length of digit by calculating the 
  // log10(x)
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let itm = nums[i];
    let len = Math.ceil(Math.log10(itm + 1))
    if (len > max)
      max = len;
  }

  return max;
}


let arr = [53, 89, 150, 36, 633, 233];

radixSort(arr);

console.log(arr);