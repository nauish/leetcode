var isPalindrome = function (x) {
  var xArr = x.toString().split("");
  reversedArr = xArr.reverse();
  reverseX = reversedArr.join("");
  return reverseX === x;
};

console.log(isPalindrome(12));
