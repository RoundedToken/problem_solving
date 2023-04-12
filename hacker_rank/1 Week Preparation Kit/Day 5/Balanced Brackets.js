// https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
function isBalanced(s) {
    
    let A = Array.from(s);
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
                return "NO";

            case "]":
                c = C.pop();
                if (c == "[") {
                    break;
                }
                return "NO";

            case "}":
                c = C.pop();
                if (c == "{") {
                    break;
                }
                return "NO";

        }
    }
    if (C.length == 0) {
        return "YES";
    } else {
        return "NO";
    }

}
function main() {
}
if (require.main === module) {
    main();
}