// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
function getPINs(observed) {
  const adjacentNumbers = {
    0: ["8"],
    1: ["2", "4"],
    2: ["1", "3", "5"],
    3: ["2", "6"],
    4: ["1", "5", "7"],
    5: ["2", "4", "6", "8"],
    6: ["3", "5", "9"],
    7: ["4", "8"],
    8: ["5", "7", "9", "0"],
    9: ["6", "8"],
  };

  const answer = [observed];

  for (let i = 0; i < observed.length; i++) {
    let l = answer.length;
    for (let g = 0; g < l; g++) {
      let n = answer[g].split("");
      for (let k = 0; k < adjacentNumbers[answer[g][i]].length; k++) {
        let cloneN = Array.from(n);
        cloneN[i] = adjacentNumbers[answer[g][i]][k];
        answer.push(cloneN.join(""));
      }
    }
  }
  return answer;
}
function main() {
  const observed = "369";
  console.log(getPINs(observed));
}
if (require.main === module) {
  main();
}

// "8": ["5", "7", "8", "9", "0"],
//     "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//     "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
