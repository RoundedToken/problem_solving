// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
function solution(N) {
    let i = 1;
    let b;
    while (i * i < N) {
        if (N % i == 0) {
            x = i;
        }
        i += 1;
    }
    if (i * i == N) {
        x = i;
    }
    b = N / x
    return (b + x) * 2;
}

function main() {
    let N = 30;
    console.log(solution(N));
}
if (require.main === module) {
    main();
}