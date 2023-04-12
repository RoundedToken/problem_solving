// https://www.hackerrank.com/challenges/beautiful-binary-string/problem?isFullScreen=true
function beautifulBinaryString(b) {

    let count = 0;
    let l = b.length;

    if (b.includes("010")) {

        b = b.split("");
        //console.log(b)
        for (let i = 1; i < l - 1; i++) {
            if (b[i] == "1" && b[i - 1] == "0" && b[i + 1] == "0") {
                b[i + 1] = "1";
                count++;
            }
        }
        //console.log(b)
        return count

    } else return count


}
function main() {
    let b = '0101010';
    console.log(beautifulBinaryString(b));
}
if (require.main === module) {
    main();
}