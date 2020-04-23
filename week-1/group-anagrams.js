const doTheThing = (strs) => {
  // loop through array of strings
  // group all anagrams together
  // return 2D array of grouped anagrams
  let anagrams = {};
  let twoDee = [];
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (!anagrams[sorted]) {
      anagrams[sorted] = [strs[i]];
    } else {
      anagrams[sorted].push(strs[i]);
    }
  }
  const keys = Object.keys(anagrams);
  for (let j = 0; j < keys.length; j++) {
    twoDee.push(anagrams[keys[j]]);
  }
  return twoDee;
};

doTheThing(["eat", "tea", "tan", "ate", "nat", "bat"]);
