// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
function parseInt(string) {
    if (string == "one million") return 1000000
    let code = new Map([
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
        ["ten", 10],
        ["eleven", 11],
        ["twelve", 12],
        ["thirteen", 13],
        ["fourteen", 14],
        ["fifteen", 15],
        ["sixteen", 16],
        ["seventeen", 17],
        ["eighteen", 18],
        ["nineteen", 19],
        ["twenty", 20],
        ["thirty", 30],
        ["forty", 40],
        ["fifty", 50],
        ["sixty", 60],
        ["seventy", 70],
        ["eighty", 80],
        ["ninety", 90]


    ]);
    function strToNum(str) {
        let arr = str.trim().split(" ");
        let num = 0;
        for (let i of arr) {
            num += code.get(i)
        }
        return num;
    }
    string = string.replace(/-| and /g, " ");
    let thousand = 0;
    let th;
    let thHun;
    if (string.includes("thousand")) {
        th = string.slice(0, string.indexOf("thousand"));
        string = string.replace(th, "");
        string = string.replace("thousand", "");
        if (th.includes("hundred")) {
            thHun = th.slice(0, th.indexOf("hundred"));
            th = th.replace(thHun, "");
            th = th.replace("hundred", "")
            th = th.trim();
            thousand = strToNum(thHun) * 100;
        }
        if (th != "") thousand = (strToNum(th) + thousand) * 1000;
        else thousand = thousand * 1000
    }
    string = string.trim();
    if (string == "") return thousand 
    let hundred = 0;
    let hun;
    if (string.includes("hundred")) {
        hun = string.slice(0, string.indexOf("hundred"));
        string = string.replace(hun, "");
        string = string.replace("hundred", "");
        hundred = strToNum(hun) * 100;
    }
    string = string.trim();
    if (string == "") return thousand + hundred
    let decade = 0;
    decade = strToNum(string);
    return thousand + hundred + decade
  }
function main() {
    let string = "seven hundred thousand"
    console.log(parseInt(string));
}
if (require.main === module) {
    main();
}