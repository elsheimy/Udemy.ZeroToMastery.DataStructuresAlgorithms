// https://leetcode.com/problems/climbing-stairs/


var climbStairs = function (n) {
  const _climbStairs = (i, n) => {
    if (i > n)
      return 0;
    if (i == n)
      return 1;

    return _climbStairs(i + 1, n) + _climbStairs(i + 2, n);
  };

  return _climbStairs(0, n);
}


console.log(climbStairs(44));
