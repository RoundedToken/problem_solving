// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
    console.log(s);
    if (s !== '') {
        const result = ['', 0];
        const count = ['', 0];

        for (let char of s) {
            if (char === count[0]) count[1]++;
            else {
                if (result[1] < count[1]) {
                    result[0] = count[0];
                    result[1] = Number(count[1]);
                }

                count[0] = char;
                count[1] = 1;
            }
        }
        if (result[1] < count[1]) {
            result[0] = count[0];
            result[1] = Number(count[1]);
        }
        return result;
    }

    return ['', 0];
}

function main() {
    console.log(longestRepetition('aaaabb'));
}
if (require.main === module) {
    main();
}

// Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
//     Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
//     Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
//     Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
//     Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
//     Test.assertDeepEquals( longestRepetition(""),            ["",0] );
//     Test.assertDeepEquals( longestRepetition("ba"),          ["b",1] );
