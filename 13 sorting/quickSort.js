function quickSort(nums, startIdx, length)
{
  if (length <= 1)
    return nums;

  // take the far-most value as pivot
  let pivot = nums[startIdx + length - 1];
  let j = startIdx - 1;

  // compare all other items to the pivot
  for (let i = startIdx; i < (startIdx + length - 1); i++)
  {
    let current = nums[i];
    if (current < pivot)
    {

      // current is less than the pivot
      // ensure that it goes to the left
      // by the end of the loop we will have 
      // all less to the left and all bigger
      // to the right
      j++;

      nums[i] = nums[j];
      nums[j] = current;
    }
  }

  // move our pivot to the center
  j++;
  nums[startIdx + length - 1] = nums[j];
  nums[j] = pivot;

  // quick-sort, left
  quickSort(nums, 0, j);
  // quick-sort, right
  quickSort(nums, j + 1, length - j - 1);

  return nums;
}  

let arr = [1, 8, 3, 9, 4, 5, 7 ];

arr = quickSort(arr, 0, arr.length);

console.log(arr);