// https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript

function dec(n) {
    let result = [];

    function decomposeRec(curIndex, curSum, curList) {
        // Если сумма квадратов равна n², добавляем текущий список чисел в результат
        if (curSum === n * n) {
            result.push(curList);
            return;
        }
        // Если текущая сумма квадратов больше n², возвращаем
        if (curSum > n * n) {
            return;
        }
        // Рассматриваем все возможные варианты добавления чисел в curList
        for (let i = curIndex; i <= Math.floor(Math.sqrt(n * n - curSum)); i++) {
            decomposeRec(i + 1, curSum + i * i, [...curList, i]);
        }
    }

    decomposeRec(1, 0, []);

    return result;
}

function decompose(n, sqrt) {
    const squareN = sqrt | (n ** 2);

    const results = [];
    let result = [];

    const recursion = (num, square) => {
        const rest = square - num ** 2;
        console.log(result);
        // console.log(num);
        if (num < 1 || rest === 0) {
            if (num > 0) result.push(num);
            return rest;
        }
        if (rest > 0) {
            result.push(num);
            num--;
            recursion(num, rest);
        }
        if (rest < 0) {
            num--;
            recursion(num, square);
        }

        // return rest;
    };

    let candidate = n - 1;
    while (candidate > 0) {
        recursion(candidate, squareN);
        if (result.reduce((prev, curr) => (prev += curr ** 2), (prev = 0)) === squareN)
            return result;

        console.log(result);
        console.log(recursion(candidate, squareN));
        result = [];
        candidate--;
    }

    return results;
}

function dec(rest, depth) {
    const res = [];
    const start = Math.sqrt(rest - 1);
    if (start === 0) {
        return res;
    }
    const end = Math.sqrt(rest / 2);
    for (let i = start; i > end; i--) {
        const newRest = rest - i * i;
        if (newRest === 0) {
            res.push(i);
            break;
        } else if (newRest === 1) {
            res.push(i, 1);
            break;
        } else if (newRest > 0) {
            const newRes = Squares(newRest, depth + 1);
            if (newRes.length > 0) {
                res.push(i);
                res.push(...newRes);
                break;
            }
        }
    }
    return res;
}

function main() {
    // console.log(decompose(50));
    // console.log(decompose(5));
    console.log(dec(50));
    // console.log(decompose(11));
    // console.log(dec(99));
}
if (require.main === module) {
    main();
}
