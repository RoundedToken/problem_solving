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

    // const prefix = [s[0].charCodeAt()];
    // const suffix = [s[s.length - 1].charCodeAt()];
    // const x = [1];
    // const mod = 1000000007;
    // const X = 31;

    // for (let i = 1; i < s.length; i++) {
    //     prefix[i] = (prefix[i - 1] * X + s[i].charCodeAt()) % mod;
    //     x[i] = (x[i - 1] * X) % mod;
    // }

    // for (let i = s.length - 2; i >= 0; i--) {
    //     suffix.push((suffix.at(-1) * X + s[i].charCodeAt()) % mod);
    // }

    // function isPalindrome(from, to) {
    //     const l = to - from + 1;

    //     return (
    //         (prefix[to] + (suffix[s.length - 2 - to] ?? 0) * (x[l] ?? 0)) % mod ===
    //         (suffix[s.length - 1 - from] + (prefix[from - 1] ?? 0) * (x[l] ?? 0)) % mod
    //     );
    // }

    const prefix = [BigInt(s[0].charCodeAt())];
    const suffix = [BigInt(s[s.length - 1].charCodeAt())];
    const x = [BigInt(1)];
    const mod = BigInt(100000000000007);
    const X = BigInt(257);

    for (let i = 1; i < s.length; i++) {
        prefix[i] = (prefix[i - 1] * X + BigInt(s[i].charCodeAt())) % mod;
        x[i] = (x[i - 1] * X) % mod;
    }

    for (let i = s.length - 2; i >= 0; i--) {
        suffix.push((suffix.at(-1) * X + BigInt(s[i].charCodeAt())) % mod);
    }

    function isPalindrome(from, to) {
        const l = to - from + 1;

        return (
            (prefix[to] + (suffix[s.length - 2 - to] ?? BigInt(0)) * (x[l] ?? BigInt(0))) % mod ===
            (suffix[s.length - 1 - from] + (prefix[from - 1] ?? BigInt(0)) * (x[l] ?? BigInt(0))) %
                mod
        );
    }

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

            if (isPalindrome(i - half, i + half)) {
                start = mid + 2;
            } else {
                end = mid - 2;
            }
        }

        if (end !== 1) {
            count += (end + 1) / 2;
        } else {
            count++;
        }

        //And if double center
        if (s[i] === s[i + 1]) {
            let start = 2;
            let end = 2 + Math.min(i, l - (i + 2)) * 2;

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                const isOdd = mid % 2 === 1;

                if (isOdd) {
                    mid = mid - 1;
                }

                const half = mid / 2;

                if (mid === 2 ? isPalindrome(i, i + 1) : isPalindrome(i - half + 1, i + half)) {
                    start = mid + 2;
                } else {
                    end = mid - 2;
                }
            }

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

    for (let i = 0; i < 410; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateRandomPalindrome(patternProbability = 0.2) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    const length = 500;
    let prevChar = '';
    let patternLength = 0;

    // первая половина строки
    for (let i = 0; i < length / 2; i++) {
        let char = characters.charAt(Math.floor(Math.random() * charactersLength));

        // генерируем повторяющиеся символы с вероятностью patternProbability
        if (Math.random() < patternProbability) {
            // увеличиваем длину паттерна на 1, если текущий символ такой же, как и предыдущий
            if (char === prevChar) {
                patternLength++;
            } else {
                // если символ не такой же, как предыдущий, добавляем паттерн, если он есть
                if (patternLength > 0) {
                    let pattern = '';
                    for (let j = 0; j < patternLength; j++) {
                        pattern += prevChar;
                    }
                    result = pattern + result + pattern;
                    patternLength = 0;
                }
                result = prevChar + result;
                prevChar = char;
            }
        } else {
            // добавляем паттерн, если он есть
            if (patternLength > 0) {
                let pattern = '';
                for (let j = 0; j < patternLength; j++) {
                    pattern += prevChar;
                }
                result = pattern + result + pattern;
                patternLength = 0;
            }
            result = prevChar + result;
            prevChar = char;
        }
    }

    // добавляем паттерн для последнего символа
    if (patternLength > 0) {
        let pattern = '';
        for (let j = 0; j < patternLength; j++) {
            pattern += prevChar;
        }
        result = pattern + result + pattern;
    } else {
        result = prevChar + result + prevChar;
    }

    return result;
}

function main() {
    const str = 'dj'.repeat(1000);
    // console.log(solution(str), countSubstrings(str));
    // console.log(solution(str) === countSubstrings(str));

    // let count = 0;
    // let limit = 100;
    // for (let i = 0; i < limit; i++) {
    //     const str = generateRandomPalindrome();

    //     if (solution(str) !== countSubstrings(str)) {
    //         // console.log(str);
    //         count++;
    //     }
    // }
    // console.log(Math.round((count / limit) * 100));
    // const str = 'dj'.repeat(15000);
    console.log(solution(str));
    // console.log(countSubstrings(str));
    // console.log(solution('xqxac'), worked('xqxac'));
    // console.log(solution('xqxqrxhebl'), worked('xqxqrxhebl'));
    // console.log(generateHash('tbccba'));
    // console.log(manacher(`snspxpqklc`), worked(`snspxpqklc`));
    // const str = generateRandomString();
    // console.log(solution(str));
    // console.log(countSubstrings(str));
    // console.log(solution(`aaa`), worked(`aaa`));
    // console.log(solution(`aba`), worked(`aba`));
    // console.log(solution(`abba`), worked(`abba`));
    // console.log(solution(`abbba`), worked(`abbba`));
    // console.log(solution(`abbbba`), worked(`abbbba`));
    // console.log(manacher(`|a|b|b|a|b|b|a|`));
    // console.log(manacher(`abbabba`));
}
if (require.main === module) {
    main();
}
