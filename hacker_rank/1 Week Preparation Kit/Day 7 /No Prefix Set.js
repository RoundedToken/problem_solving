// https://www.hackerrank.com/challenges/one-week-preparation-kit-no-prefix-set/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-seven&h_r=next-challenge&h_v=zen

function noPrefix(words) {
    for (let i1 in words) {
        for (let i2 in words) {
            if (i1 !== i2) {
                if (words[i1].includes(words[i2])) {
                    return console.log(`BAD\n${words[i1]}`);
                }
            }
        }
    }
    return 'GOOD';
}

function main() {
    let words = ['aab', 'defgab', 'abcde', 'aabcde', 'bbbbbbbbbb', 'jabjjjad'];
    console.log(noPrefix(words));
}
if (require.main === module) {
    main();
}
