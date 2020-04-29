const canJump = function (nums) {
  let jumps = nums[0];
  for (let i = 0; i < nums.length; i++) {
    console.log(i + jumps);
    if (i + jumps >= nums.length - 1) {
      return true;
    } else if (jumps < 0) {
      return false;
    } else if (nums[i + 1] >= jumps && jumps != 0) {
      jumps = nums[i + 1];
    } else {
      jumps -= 1;
    }
  }
};

canJump([1, 1, 1, 0]);
