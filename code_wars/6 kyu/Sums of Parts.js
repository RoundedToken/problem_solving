// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
    const p = [0];
    ls.reverse().forEach((v, i) => (p[i + 1] = p[i] + v));
    return p.reverse();
}

function main() {
    const ls = [1, 2, 3, 4, 5, 6];
    console.log(partsSums(ls));
}
if (require.main === module) {
    main();
}

// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
