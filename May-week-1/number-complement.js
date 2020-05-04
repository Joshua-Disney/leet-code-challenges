const findComplement = function (num) {
  let binary = (num >>> 0).toString(2);
  let newString = "";
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      newString += "0";
    } else {
      newString += "1";
    }
  }
  return parseInt(newString, 2).toString(10);
};
