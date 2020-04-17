var maxSubArray = function (nums) {
  let sum = nums[0];
  let checker = 0;
  for (let i = 0; i < nums.length; i++) {
    checker += nums[i];
    if (checker > sum && checker < 0) {
      sum = checker;
      checker = 0;
    } else if (checker > sum) {
      sum = checker;
    } else if (checker < 0) {
      checker = 0;
    }
  }
  return sum;
};
