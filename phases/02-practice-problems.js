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

  let str1Keys = Object.keys(tracker)
  for (let i = 0; i < str1Keys.length; i++) {
    let currKey = str1Keys[i];

    if (tracker[currKey] !== tracker2[currKey]) return false;
  }

  return true;

  // let a = str1.split("").sort().join("");
  // let b = str2.split("").sort().join("");
  // return a === b;

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
