function reverseStringRecursive(text) {
  if (text === "")
  return "";

  return reverseStringRecursive(text.substr(1)) + text.charAt(0);
}

function reverseStringIterative(text) {
  let arr  = [];

  for (let i = 0; i < text.length ; i++) {
    arr[i] = text[text.length - i - 1];

  }

  return arr.join('');
}


console.log(reverseStringRecursive("12345"));
console.log(reverseStringRecursive("1234"));