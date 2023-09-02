/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let strX = x.toString();
  let left = 0;
  let right = strX.length - 1;

  while (left < right) {
    if (strX[left] !== strX[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
  // var xArr = x.toString().split("");
  // reversedArr = xArr.reverse();
  // reverseX = reversedArr.join("");
  // return reverseX === x;
};

console.log(isPalindrome(121));
