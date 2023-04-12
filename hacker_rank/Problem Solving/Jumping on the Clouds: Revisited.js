// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true
function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = k;
    while (i % c.length != 0) {
        if (c[i % c.length] == 0) {
            energy--;
        } else { energy -= 3 }
        i += k
    }
    if (c[0] == 0) {
        energy--;
    } else { energy -= 3 }
    return energy;
}
function main() {
}
if (require.main === module) {
    main();
}