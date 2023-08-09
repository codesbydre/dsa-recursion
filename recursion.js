/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 1; //multiply by 1 when done
  //normal case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case
  if (words.length === 0) return 0;
  //normal case
  const currentWord = words[0].length; //start w/ first word in array
  const remainingLongest = longest(words.slice(1)); //call itself with the rest of the words

  return Math.max(currentWord, remainingLongest); //compare length current word with longest word from remaining words
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if (str.length === 0) return "";
  //normal case
  //take the first char and concat w/ every other char of remaining string
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if (str.length <= 1) return true; //empty or one char, its a palindrome

  //normal case
  //check if first and last chars are same
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  //base case
  //if end of array reached and val not found, return -1
  if (idx >= arr.length) return -1;
  //normal case
  //if val at current index = val, return index
  if (arr[idx] === val) return idx;
  //call function with next index
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //base case
  if (str.length === 0) return "";
  //normal case
  //take last char and concat with reverse of rest of str, build reverse str 1 char at a time
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      //if str, add to stringsArray
      stringsArray.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      stringsArray = stringsArray.concat(gatherStrings(obj[key]));
    }
  }
  return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  //base case
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid; //if value is at mid, return
  //normal case
  //search in left half if value smaller than mid
  if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  //search right half if value greater than mid
  return binarySearch(arr, val, mid + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
