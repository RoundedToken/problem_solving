// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
function maxHole(N) {
    let holeSize = 0;
    let holeMax = 0;
    for (let i = 0; i < 30; i++) {
        let xx = N & 3;
        if (xx == 1) {           //Begin hole;
            holeSize = 1;
        } else if (xx == 2) {    //End hole;
            if (holeSize >= 1) {
                if (holeSize > holeMax) {
                    holeMax = holeSize;
                }
                holeSize = 0;
            }
        } else if (xx == 0) {    //In Hole;
            if (holeSize >= 1) {
                holeSize++;
            }
        }
        N = N >>> 1;
        //console.log("xx = ", xx, "holeMax = ", holeMax, "holeSize = ", holeSize);
    };
    return holeMax;
}
function main() {
}
if (require.main === module) {
    main();
}