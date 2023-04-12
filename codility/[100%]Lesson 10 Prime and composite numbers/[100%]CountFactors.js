// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
function solution(N) {
    let i = 1;
    let result = 0;
    while (i * i < N) {
        if (N % i == 0) {
            result += 2;
        }
        i += 1;
    }
    if (i * i == N) {
        result += 1;
    }
    return result;
}

function main() {
    let N = 30;
    console.log(solution(N));
}
if (require.main === module) {
    main();
}