// https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function gridSearch(G, P) {
    let lG = G.length;
    let lP = P.length;
    let lGRow = G[0].length;
    let lPRow = P[0].length;
    console.log("lG = ", lG, "lP = ", lP, "lGRow = ", lGRow, "lPRow = ", lPRow);
    let patternP = P.join("");
    for (let i = 0; i <= lG - lP; i++) {
        for (let g = 0; g <= lGRow - lPRow; g++) {
            let patternG = "";
            for (let k = i; k < i + lP; k++) {
                patternG += G[k].slice(g, g + lPRow);
            }
            if (patternG == patternP) { return "YES" }
        }
    }
    return "NO"
}
function main() {
    let G = ["7283455864",
            "6731158619",
            "8988242643",
            "3830589324",
            "2229505813",
            "5633845374",
            "6473530293",
            "7053106601",
            "0834282956",
            "4607924137"];
    let P = ["9505",
            "3845",
            "3530"]
    console.log(gridSearch(G, P));
}
if (require.main === module) {
    main();
}