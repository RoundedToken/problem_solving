// https://www.hackerrank.com/challenges/happy-ladybugs/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function happyLadybugs(b) {
    b = b.split("");
    let l = b.length;
    let flag = false;
    for (let i = 0; i < l; i++) {
        if (b[i] == "_") {
            flag = true;
        }
    }
    if (flag == true) {
        for (let i = 0; i < l - 2; i++) {
            if (b[i] != b[i + 1]) {
                let x = b[i + 1]
                for (let g = i + 2; g < l; g++) {
                    if (b[g] == b[i]) {
                        b[i + 1] = b[g];
                        b[g] = x;
                        break;
                    }
                }
            }
        }
        for (let i = 0; i < l; i++) {
            if (b[i] != "_") {
                if (b[i] != b[i + 1] && b[i] != b[i - 1]) { return "NO" }
            } 
        }
        return "YES"
    } else {
        for (let i = 0; i < l; i++) {
            if (b[i] != "_") {
                if (b[i] != b[i + 1] && b[i] != b[i - 1]) { return "NO" }
            }
        }
        return "YES"
    }
}
function main() {
    let b = "BGRBSL_DRDKHYJQQCVRS_EMSDEBJB_KRQQGYMDRHQYSSGDHRQESRRD_SMCRDEJJDSDVQBS"
    console.log(happyLadybugs(b));
}
if (require.main === module) {
    main();
}