function checkEqual(S, Q, queries) {
    let result = [];

    for (let i = 0; i < Q; i++) {
        let [L, A, B] = queries[i];

        let sub1 = S.substring(A, A + L);
        let sub2 = S.substring(B, B + L);

        if (sub1 === sub2) {
            result.push('yes');
        } else {
            result.push('no');
        }
    }

    return result.join('\n');
}

function processData(input) {
    let lines = input.trim().split('\n');

    let S = lines[0];

    let Q = parseInt(lines[1]);

    let queries = [];
    for (let i = 2; i < lines.length; i++) {
        queries.push(lines[i].trim().split(' ').map(Number));
    }

    return checkEqual(S, Q, queries);
}

function main() {
    console.log(
        processData(`caeabaeadedcbdcdccec
    10
    13 4 3
    2 12 15
    10 1 3
    3 8 15
    13 5 6
    7 2 6
    9 8 8
    19 0 0
    19 0 0
    6 7 13`)
    );
}
if (require.main === module) {
    main();
}
