function fibonacciRecursive(number) {
if (number <  2)
return number;

return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

function fibonacciIterative(number) {
  if (number <  2)
return number;

let arr = [0, 1];
  for (let i = 2; i <number;i++){
    arr[i%2] = arr[0] + arr[1]; 
  }

  return arr[0] + arr[1];
}

console.log(fibonacciIterative(8));