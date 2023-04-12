function solution(A, B) {

    function primeFactors(n) {

        const factors = [];
        let divisor = 2;

        while (n >= 2) {
            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }

        return factors;
    }

    function gsd(a, b) {

        if (a % b == 0) return b
        else return gsd(b, a % b);

    }

    let count = 0;

    for (let i = 0; i < A.length; i++) {

        let first = A[i];
        let second = B[i];
        if (first == second) {
            count++;
            continue;
        }
        let GSD = gsd(first, second);
        let SetGsd;
        let SET;

        if (GSD != first && GSD != second) continue
        else if (GSD == first) {
            SetGsd = new Set(primeFactors(GSD));
            SET = new Set(primeFactors(second / first));
            let flag = true;
            for (let val of SET) {
                if (SetGsd.has(val) == false) {
                    flag = false;
                    break;
                }
            }
            if (flag) count++
        } else {
            SetGsd = new Set(primeFactors(GSD));
            SET = new Set(primeFactors(first / second));
            let flag = true;
            for (let val of SET) {
                if (SetGsd.has(val) == false) {
                    flag = false;
                    break;
                }
            }
            if (flag) count++
        }
        console.log(first, second, SET, SetGsd)
    }
    return count
}
function main() {
    let A = [
        48, 66, 67, 15, 2, 38, 28, 82, 70, 61, 56, 67,
        15, 45, 17, 91, 6, 82, 8, 69, 34, 41, 85, 2,
        7, 92, 51, 10, 99, 95, 12, 43, 14, 32, 63, 17,
        70, 6, 18, 82, 41, 42, 60, 48, 39, 4, 73, 97,
        98, 67, 36, 37, 70, 68, 12, 24, 37, 52, 82, 51,
        3, 83, 44, 52, 23, 43, 39, 78, 11, 55, 18, 70,
        4, 28, 35, 64, 6, 46, 21, 29, 48, 96, 49, 96,
        17, 93, 37, 19, 75, 92, 1, 27, 78, 35, 25, 1,
        5, 62, 99, 100
    ];
    let B = [
        97, 2, 74, 16, 99, 2, 88, 69, 86, 100, 24, 34,
        71, 29, 27, 23, 86, 88, 80, 23, 93, 52, 24, 46,
        42, 8, 57, 36, 57, 94, 65, 41, 87, 100, 50, 95,
        2, 15, 18, 94, 70, 72, 29, 50, 89, 10, 12, 5,
        47, 85, 56, 41, 51, 18, 95, 36, 24, 32, 83, 32,
        91, 34, 45, 8, 91, 80, 48, 12, 50, 38, 85, 93,
        75, 29, 5, 90, 95, 16, 50, 49, 98, 5, 7, 85,
        57, 47, 78, 60, 70, 26, 9, 1, 34, 65, 38, 35,
        62, 71, 60, 32
    ];
    console.log(solution(A, B));
}
if (require.main === module) {
    main();
}
