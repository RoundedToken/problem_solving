// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
    let count = 0;
    text = text.toLowerCase();
    let verbs = new Set(text);
    verbs.forEach((val) => {
        let flag = true;
        for (let i of text) {
            if (val == i) {
                if (flag) flag = false;
                else {
                    count++;
                    break
                }
            }
        }  
    })
    return count
}
function main() {
    let text = "Indivisibilitys";
    console.log(duplicateCount(text));
}
if (require.main === module) {
    main();
}