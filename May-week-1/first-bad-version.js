const solution = function (isBadVersion) {
  // Code goes here.  Me smart.

  return function (n) {
    let highestGood = 0;
    let lowestBad = n;

    while (highestGood != lowestBad - 1) {
      let middle = Math.floor((highestGood + lowestBad) / 2);
      if (isBadVersion(middle) === true) {
        lowestBad = middle;
      } else if (isBadVersion(middle) === false) {
        highestGood = middle;
      }
    }

    return lowestBad;
  };
};
