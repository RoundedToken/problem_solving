// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
function solution(input, markers) {
    return input
        .split("\n")
        .map((v) => {
            for (let marker of markers) {
                if (v.includes(marker)) return v.substring(0, v.indexOf(marker)).trim();
            }
            return v;
        })
        .join("\n");
}
function main() {
    let input = "apples, pears # and bananas\ngrapes\nbananas !apples";
    let markers = ["#", "!"];
    console.log(solution(input, markers));
}
if (require.main === module) {
    main();
}
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"
