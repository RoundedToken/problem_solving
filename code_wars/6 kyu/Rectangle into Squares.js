// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/javascript

function sqInRect(lng, wdth) {
    if (lng === wdth) return null;
    let arr = [];
    while (lng > 0 && wdth > 0) {
        if (lng > wdth) {
            lng = lng - wdth;
            arr.push(wdth);
        } else {
            wdth = wdth - lng;
            arr.push(lng);
        }
    }
    return arr;
}

function main() {
    let lng = 20;
    let wdth = 14;
    console.log(sqInRect(lng, wdth));
}
if (require.main === module) {
    main();
}
