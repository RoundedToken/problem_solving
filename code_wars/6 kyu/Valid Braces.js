// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
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
}
function validBraces(braces){
    if (solution(braces) == 1) return true;
    else return false
  }
function main() {
    let braces = "(){}[]";
    console.log(validBraces(braces));
}
if (require.main === module) {
    main();
}
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False