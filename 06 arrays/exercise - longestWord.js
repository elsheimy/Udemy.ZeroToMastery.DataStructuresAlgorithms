
// Longest Word
// https://coderbyte.com/information/Longest%20Word

var longestWord = function(text) {
  if (!text || text.length == 0)
    return undefined;

  var arr = text.match(/(\w+)/gi);

  arr  = arr.sort(function (a, b){
    return b.length - a.length;
  });

  return arr[0];
}


console.log(longestWord("fun&!! time"))