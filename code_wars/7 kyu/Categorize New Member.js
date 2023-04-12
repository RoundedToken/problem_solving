// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
    for (let i in data) {
        if (data[i][0] >= 55 && data[i][1] > 7) data[i] = "Senior";
        else data[i] = "Open";
    }
    return data
  }
function main() {
    let data =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
    console.log(openOrSenior(data));
}
if (require.main === module) {
    main();
}