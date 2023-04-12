// https://www.hackerrank.com/challenges/bigger-is-greater/problem?isFullScreen=true
function biggerIsGreater(s) {
    let length = s.length;
    let otherStr = "";
    let ins = 0;
    let greaterC = "";
    for (let i = s.length - 1; i >= 0; i--) {
      let cur = s[i];
      if (cur < s[i + 1]) {
        ins = i;
        for (let j = ins; j < s.length; j++) {
          if (greaterC <= cur) {
            greaterC = s[j];
          }
          if (s[j] < greaterC && s[j] > cur) {
            greaterC = s[j];
          }
        }
        break;
      } else {
        otherStr += s[i];
      }
    }
    otherStr += s[ins];
    otherStr = otherStr.replace(greaterC, "");
    otherStr = otherStr.split("").sort().join("");
    if (!greaterC) {
      return "no answer";
    }
    let newStr = "";
    for (let i = 0; i < length; i++) {
      if (i < ins) newStr += s[i];
      if (i === ins) newStr += greaterC;
    }
    newStr += otherStr;
    return newStr;
}
function main() {
    let s = "ehdegnmorgafrjxvksc"
    console.log(biggerIsGreater(s));
}
if (require.main === module) {
    main();
}