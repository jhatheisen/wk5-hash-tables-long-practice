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
  let combined = arr1.concat(arr2);
  let tracker = {};
  for (let char of combined) {
    if (char in tracker) {
      tracker[char] ++;
    } else {
      tracker[char] = 1;
    }
  }

  let common = [];
  for (let key in tracker) {
    if (tracker[key] > 1) {
      common.push(Number(key));
    }
  }

  return common;

}


function duplicate(arr) {
  let tracker = {};
  for (let char of arr) {
    if (char in tracker) {
      return char;
    } else {
      tracker[char] = 1;
    }
  }
}


function twoSum(nums, target) {
  let numsObject = {};

  for (let num of nums) {
    let checkNum = target - num;
    if (checkNum in numsObject) {
      return true;
    } else {
      numsObject[num] = true;
    }
  }

  return false;
}


function wordPattern(pattern, strings) {
  // make pattern an arr
  pattern = pattern.split('');

  // get only uniques of pattern and string
  let patternArray = [... new Set(pattern)]
  console.log(patternArray)
  let stringArray = [... new Set(strings)];
  console.log(stringArray);

  // if too many uniques, can't be pattern, return false
  if (stringArray.length !== patternArray.length) return false;

  let stringObj = {};
  // iterate through arrays
  for (let i = 0; i < patternArray.length; i++) {
    // create key value pair for each el of arr
    stringObj[stringArray[i]] = patternArray[i];
  }
  console.log(stringObj);

  // set each string to equal it's character in pattern
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] in stringObj) {
      strings[i] = stringObj[strings[i]];
    }
  }

  // check if pattern === strings , return result
  for (var i = 0; i < pattern.length; ++i) {
    if (pattern[i] !== strings[i]) return false;
  }
  return true;
}

console.log(parseInt('C9', 16).toString(2));

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
