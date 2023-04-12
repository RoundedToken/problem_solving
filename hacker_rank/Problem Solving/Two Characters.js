// https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function alternate(s) {
    let elem;
    let flag = true;
    let uniq = new Set();
    let pairs = Array();
    let count = 0;
    let max = 0;
    function cheak (str) {
        let l = str.length;
        for (let i = 0; i < l; i++) {
            if (str.charAt(i) == str.charAt(i + 1)) {
                elem = str.charAt(i);
                return true
            }
        }
        return false
    }

    function del (str, x) {
        let l = str.length;
        let newStr = ""
        for (let i = 0; i < l; i++) {
            if (str.charAt(i) != x) newStr += str.charAt(i)
        }
        return newStr
    }

    //function 

    while (flag) {
    if (cheak(s)) s = del(s, elem);
    else flag = false
    }
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        uniq.add(s.charAt(i));
    }
    uniq = Array.from(uniq)
    console.log(uniq)
    for (let i = 0; i < uniq.length - 1; i++) {
        for (let g = i + 1; g < uniq.length; g++) {
            pairs.push([uniq[i], uniq[g]])
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        let flag0 = true;
        let flag1 = true;
        for (let g = 0; g < s.length; g++) {
            if (s.charAt(g) == pairs[i][0] && flag0) {
                count++;
                flag0 = false;
                flag1 = true;
            } else if (s.charAt(g) == pairs[i][1] && flag1) {
                count++;
                flag0 = true;
                flag1 = false;
            } else if (s.charAt(g) == pairs[i][0] && flag0 == false) {
                count = 0;
                break
            } else if (s.charAt(g) == pairs[i][1] && flag1 == false) {
                count = 0;
                break
            }
        }
        if (count > max) max = count;
        count = 0;
    }
    return max
}
function main() {
    let s = 'beabeefeab'
    console.log(alternate(s));
}
if (require.main === module) {
    main();
}