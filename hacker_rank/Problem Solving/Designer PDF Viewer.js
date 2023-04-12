// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true
function designerPdfViewer(h, word) {
    let Z = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let maxHeight = 0;
    for (let i = 0; i < word.length; i++) {
        for (let g = 0; g < Z.length; g++) {
            if (word.charAt(i) == Z[g]) {
                if (h[g] > maxHeight) {
                    maxHeight = h[g];
                }
            }
        }
    }
    return maxHeight * word.length;
}
function main() {
}
if (require.main === module) {
    main();
}