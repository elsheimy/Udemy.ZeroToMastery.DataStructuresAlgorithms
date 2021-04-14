function factorialRecursive(number) {
  if (number == 1)
    return number;
  return number * factorial(number - 1)
}

function factorialIterative (number){
  let sum = 1;

  while (number > 1)
  {
    sum = sum * number;

    number--;
  }

  return sum;
}

console.log(factorialIterative(5));