// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
    if (str.length == 0) return ""
      let y = str.charAt(0)
      return y.concat(str.split(/[-_]/).map((val)=> {
          let x = val.split("");
          x[0] = x[0].toUpperCase();
          return x.join("")
      }).join("").slice(1));
}
function main() {
    let str = "the-stealth-warrior";
    console.log(toCamelCase(str));
}
if (require.main === module) {
    main();
}

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"