// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/
function solution(A) {
    A = A.concat([1]);
    let Fib = [0, 1];
    let l = A.length;
    for (let i = 2; i <= 25; i++) {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
    }
    for (let i = 2; i <= 25; i++) {
        if (Fib[i + 1] > l) Fib = Fib.slice(2, i + 1).reverse();
    }
    let pos = -1;
    let count = 0;

    console.log(A)
    console.log(Fib)
    for (; ;) {
        let flag = true;
        for (let i of Fib) {
            if (A[pos + i] == 1) {
                pos += i;
                count++;
                flag = false;
                console.log(pos, i)
                break;
            }
        }

        if (flag) break
    }
    if (pos == l - 1) return count
    else {
        A = A.reverse().concat([1]);
        console.log(A)
        for (; ;) {
            let flag = true;
            for (let i of Fib) {
                if (A[pos + i] == 1) {
                    pos += i;
                    count++;
                    flag = false;
                    console.log(pos, i)
                    break;
                }
            }
            if (flag) break
        }
        if (pos == l - 1) return count
        else return -1
    }
}

function main() {
    let A = [ 1, 1, 0, 0, 0 ];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}