var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      count++;
      i = i - 1;
    }
  }

  return nums;
};
