const isPalindrome = (str) => {
    const l = str.length;
    const isOdd = l % 2 === 1;
    const mid = Math.floor(l / 2);
    const left = str.substring(0, mid);
    const right = str.substring(isOdd ? mid + 1 : mid);

    return left === right.split('').reverse().join('');

    // const right = str
    //     .substring(isOdd ? mid + 1 : mid)
    //     .split('')
    //     .reverse()
    //     .join('');

    // return left === right;
};

var countSubstrings = function (S) {
    let len = S.length,
        ans = 0;
    for (let i = 0; i < len; i++) {
        let j = i - 1,
            k = i;
        while (k < len - 1 && S[k] === S[k + 1]) k++;
        (ans += ((k - j) * (k - j + 1)) / 2), (i = k++);
        while (~j && k < len && S[k] === S[j]) j--, k++, ans++;
    }
    return ans;
};

function solution(s) {
    const l = s.length;
    let count = 0;

    for (let i = 0; i < l; i++) {
        let start = 1;
        let end = Math.max(Math.min(l - i - 1, i) * 2 + 1, 1);

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            const isEven = mid % 2 === 0;
            if (isEven) {
                mid = mid + 1;
            }
            const half = (mid - 1) / 2;
            // console.log('i=', i, 'mid', mid);
            if (isPalindrome(s.substring(i - half, i + half + 1))) {
                // start = isEven ? mid + 2 : mid + 1;
                start = mid + 2;
            } else {
                // end = isEven ? mid - 2 : mid - 1;
                end = mid - 2;
            }
        }
        // console.log('end', end);
        if (end !== 1) {
            count += (end + 1) / 2;
        } else {
            count++;
        }

        //And if double center
        if (s[i] === s[i + 1]) {
            let start = 2;
            // let end = Math.max(2, 2 + Math.min(i, l - i - 2) * 2);
            let end = 2 + Math.min(i, l - (i + 2)) * 2;
            // console.log('HERE', end);
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                const isOdd = mid % 2 === 1;

                if (isOdd) {
                    mid = mid - 1;
                }
                // console.log('mid', mid, 'str', s, 'i', i);
                const half = mid / 2;

                const sub =
                    mid === 2 ? s.substring(i, i + 2) : s.substring(i - half + 1, i + half + 1);

                if (isPalindrome(sub)) {
                    start = mid + 2;
                } else {
                    end = mid - 2;
                }
            }
            // console.log('!', end);
            count += end / 2;
        }
    }

    return count;
}

function worked(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1);

            if (isPalindrome(substring)) {
                count++;
            }
        }
    }

    return count;
}

function generateRandomString() {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    for (let i = 0; i < 10000; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function main() {
    // for (let i = 0; i < 50; i++) {
    //     const str = generateRandomString();
    //     console.log(str);
    //     console.log(solution(str), worked(str));
    // }

    // console.log(manacher(`snspxpqklc`), worked(`snspxpqklc`));
    const str = generateRandomString();
    console.log(solution(str));
    console.log(countSubstrings(str));
    // console.log(solution(`aaa`), worked(`aaa`));
    // console.log(manacher(`aba`), worked(`aba`));
    // console.log(manacher(`abba`), worked(`abba`));
    // console.log(manacher(`abbba`), worked(`abbba`));
    // console.log(manacher(`abbbba`), worked(`abbbba`));
    // console.log(manacher(`|a|b|b|a|b|b|a|`));
    // console.log(manacher(`abbabba`));
}
if (require.main === module) {
    main();
}
