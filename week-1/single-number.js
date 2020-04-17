var singleNumber = function (nums) {
  let counts = {};
  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i]]) {
      delete counts[nums[i]];
    } else {
      counts[nums[i]] = 1;
    }
  }
  return Object.keys(counts)[0];
};
