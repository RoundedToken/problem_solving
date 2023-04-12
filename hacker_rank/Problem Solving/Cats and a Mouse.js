// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
function catAndMouse(x, y, z) {
    let G = Math.abs(z - x);
    let I = Math.abs(z - y);
    if (G == I) {
        return "Mouse C";
    } else if (G > I) {
        return "Cat B";
    } else {return "Cat A"}
}
function main() {
}
if (require.main === module) {
    main();
}