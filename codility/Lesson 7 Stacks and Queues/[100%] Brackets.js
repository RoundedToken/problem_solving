// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
function solution(S) {
    let A = Array.from(S);
    let C = [];
    let c = C.pop();
    for (let i = 0; i < A.length; i++) {
        const nextBrace = A[i];
        switch (nextBrace) {
            case "(":
            case "[":
            case "{":
                C.push(nextBrace);
                break;

            case ")":
                c = C.pop();
                if (c == "(") {
                    break;
                }
                return 0;

            case "]":
                c = C.pop();
                if (c == "[") {
                    break;
                }
                return 0;

            case "}":
                c = C.pop();
                if (c == "{") {
                    break;
                }
                return 0;

        }
    }
    if (C.length == 0) {
        return 1;
    } else {
        return 0;
    }
    /* let A = Array.from(S);
    let C = [];
    let x;
    let last = A.length - 1;
    while (A.length > 0) {
        if ((A[last] == "}") || (A[last] == "]") || (A[last] == ")")) {
            x = A.pop();
            C.push(x);
        } else { return 0}
        console.log(C);
    }*/
}
function main() {
    S1 = "({{({}[]{})}}[]{})";
    console.log(solution(S1));
}
if (require.main === module) {
    main();
}