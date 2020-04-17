var isHappy = function (n) {
  let counter = 0;
  let sum = n;
  while (counter < 7) {
    if (sum === 1) {
      return true;
    } else {
      let arr = [...(sum + "")].map((num) => +num);
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
      }
    }
    counter++;
  }
  return false;
};
