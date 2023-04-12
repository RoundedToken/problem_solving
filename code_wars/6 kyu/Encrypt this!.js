// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

var encryptThis = function (text) {
    let encrypt = text.split(' ');
    return encrypt
        .map((v) => {
            let encrypt = v.split('');
            encrypt[0] = encrypt[0].charCodeAt().toString();
            const x = encrypt[encrypt.length - 1];
            encrypt[encrypt.length - 1] = encrypt[1];
            encrypt[1] = x;
            return encrypt.join('');
        })
        .join(' ');
};

function main() {
    const text = 'hello world';
    console.log(encryptThis(text));
}
if (require.main === module) {
    main();
}

//   encryptThis("Hello") === "72olle"
//   encryptThis("good") === "103doo"
//   encryptThis("hello world") === "104olle 119drlo"
