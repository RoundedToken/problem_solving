// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/
function chockolate(N, M) {
    let pos = 0;
    let count = 0;
    let cof = Math.floor((N - M) / M)
    for (; ;) {
        //console.log(count, cof)
        if (pos + M * cof <= N && cof > 0) {
            count += cof
            pos = (pos + M * cof) % N

        } else {
            count++;
            pos = (pos + M) % N;
        }
        if (pos == 0) break

    }
    return count
}
function main() {
    let N = 27;
    let M = 16;
    console.log(chockolate(N, M))
}
if (require.main === module) {
    main();
}