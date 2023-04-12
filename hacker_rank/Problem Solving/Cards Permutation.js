// https://www.hackerrank.com/challenges/cards-permutation/problem?isFullScreen=true
function solve(x) {
    let mod = 1000000007;
    let arr = Array()
    let l = x.length;
    for (let i = 0; i < l; i++) {
        arr[i] = i + 1;
    }

    let sum = 0;

    function ecvol(arr1) {
        for (let i = 0; i < l; i++) {
            if (x[i] != 0) {
                if (x[i] != arr1[i]) {
                    return false
                }
            }
        }
        return true
    }


    function perm(xs) {
        let ret = [];

        for (let i = 0; i < xs.length; i = i + 1) {
            let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

            if (!rest.length) {
                ret.push([xs[i]])
            } else {
                for (let j = 0; j < rest.length; j = j + 1) {
                    ret.push([xs[i]].concat(rest[j]))
                }
            }
        }
        return ret;
    }
    function fact(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * fact(num - 1));
        }
    }


    let cof = Array(l).fill(0)


    let values = Array();
    let val = [];
    for (let i = 0; i < l; i++) values[i] = i + 1;
    for (let i = 0; i < l; i++) if (x[i] != 0) values[x[i] - 1] = 0;
    for (let i = 0; i < l; i++) if (values[i] != 0) val.push(values[i])
    values = perm(val);
    if (val.length != 0) {

        for (let g = 0; g < values.length; g++) {

            let order = Array();
            for (let i = 0; i < l; i++) order[i] = i + 1;

            let p = Array();
            let index = 0;
            for (let k = 0; k < l; k++) {
                if (x[k] == 0) {
                    p[k] = values[g][index];
                    index++;
                }
                else p[k] = x[k];
            }

            for (let i = 0; i < l; i++) {
                let x = order.indexOf(p[i]);
                cof[i] += x;
                order.splice(x, 1);
            }
            // console.log("cof=", cof, "p=", p)
        }
    } else {
        let order = Array();
        for (let i = 0; i < l; i++) order[i] = i + 1;
        let p = x;
        for (let i = 0; i < l; i++) {
            let x = order.indexOf(p[i]);
            cof[i] += x;
            order.splice(x, 1);
        }
    }

    let num = 0;
    let factor = 1;
    for (let i = l - 2; i >= 0; i--) {
        num = (((cof[i] % mod) * (factor % mod)) % mod + (num % mod)) % mod
        factor = (((l - i) % mod) * (factor % mod)) % mod
    }
    if (values.length == 0) num++;
    num += values.length
    console.log(cof)
    console.log(num)
    //console.table(perm(arr))


}

function main() {
    let x = [0, 0, 0, 11, 8, 0, 0, 0, 0, 0, 0, 6];
    x = [22, 15, 14, 0, 5, 0, 9, 12, 0, 0, 0, 0, 0, 0, 0, 3, 17, 20, 0, 0, 0, 0, 0, 0, 23]
    console.log(solve(x));
}
if (require.main === module) {
    main();
}