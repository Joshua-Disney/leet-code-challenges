var countElements = function (arr) {
  let myObj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!myObj[arr[i]]) {
      myObj[arr[i]] = true;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (myObj[arr[i] + 1]) {
      count += 1;
    }
  }
  return count;
};
