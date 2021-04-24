let calculations = 0;

function fibonacciMaster() {
  let cache = {}

  return function fibonacci(num) {
    if (num < 0)
      throw 'invalid number';

    if (num in cache)
      return cache[num];

    calculations++;
    if (num <= 1)
      return num;

    let fib = fibonacci(num - 1) + fibonacci(num - 2);
    cache[num] = fib;
    return fib;

  };
}

const fib = fibonacciMaster();

console.log(fib(30));
console.log(calculations);
console.log(fib(30));
console.log(calculations);
