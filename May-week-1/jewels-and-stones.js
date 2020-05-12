const numJewelsInStones = function (J, S) {
  let nums = 0;

  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) >= 0) {
      nums += 1;
    }
  }

  return nums;
};
