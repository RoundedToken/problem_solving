//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
function encrypt(text, n) {
    if (text === null || text === undefined) return null;
    if (text === '' || n < 1) return text;
    for (let i = 1; i <= n; i++) {
        const even = [];
        const odd = [];
        text.split('').forEach((v, i) => (i % 2 ? odd.push(v) : even.push(v)));
        text = odd.join('') + even.join('');
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (encryptedText === null || encryptedText === undefined) return null;
    if (encryptedText === '' || n < 1) return encryptedText;
    const l = encryptedText.length;
    for (let i = 1; i <= n; i++) {
        const even = encryptedText.slice(~~(l / 2)).split('');
        const odd = encryptedText.slice(0, ~~(l / 2)).split('');
        encryptedText = '';
        for (let g = 0; g <= ~~(l / 2); g++) {
            if (even[g]) encryptedText += even[g];
            if (odd[g]) encryptedText += odd[g];
        }
    }
    return encryptedText;
}

function main() {
    let encryptedText = '135024';
    let n = 1;
    console.log(decrypt(encryptedText, n));
}
if (require.main === module) {
    main();
}

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
