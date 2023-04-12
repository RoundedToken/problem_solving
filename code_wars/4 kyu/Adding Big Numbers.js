// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
  let answer = "";
  let rest;
  let bonus = 0;
  const aL = a.length;
  const bL = b.length;

  if (aL > bL) {
    rest = a.slice(0, aL - bL);
    a = a.slice(aL - bL);
  } else if (aL < bL) {
    rest = b.slice(0, bL - aL);
    b = b.slice(bL - aL);
  } else rest = "";

  console.log(a, b, rest);

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + bonus;
    console.log(sum);
    sum < 10 ? (bonus = 0) : (bonus = 1);
    sum = sum.toString();
    answer = sum[sum.length - 1] + answer;
  }

  if (bonus === 0) {
    return rest + answer;
  } else {
    let newRest = "";
    for (let i = rest.length - 1; i >= 0; i--) {
      let sum = Number(rest[i]) + bonus;
      sum < 10 ? (bonus = 0) : (bonus = 1);
      sum = sum.toString();
      newRest = sum[sum.length - 1] + newRest;
    }
    if (bonus === 0) return newRest + answer;
    else return "1" + newRest + answer;
  }
}

function main() {
  let a = "1799";
  let b = "123";
  console.log(add(a, b));
}
if (require.main === module) {
  main();
}
