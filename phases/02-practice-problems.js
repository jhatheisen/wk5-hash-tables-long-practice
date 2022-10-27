function anagrams(str1, str2) {
  let tracker = {};
  for (let char of str1) {
    if (char in tracker) {
      tracker[char] ++;
    } else {
      tracker[char] = 1;
    }
  }
  let tracker2 = {};
  for (let char of str2) {
    if (char in tracker2) {
      tracker2[char] ++;
    } else {
      tracker2[char] = 1;
    }
  }
  return tracker + tracker2;
}


function commonElements(arr1, arr2) {
  // Your code here
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
