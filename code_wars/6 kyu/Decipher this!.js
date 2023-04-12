// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

function decipherThis(str) {
    let decrypt = str.split(' ');
    return decrypt
        .map((v) => {
            let code = v.match(/\d+/)[0];
            v = v.replace(code, String.fromCharCode(code));
            v = v.split('');
            const x = v[v.length - 1];
            v[v.length - 1] = v[1];
            v[1] = x;
            return v.join('');
        })
        .join(' ');
}

function main() {
    const str = '72olle 103doo 100ya';
    console.log(decipherThis(str));
}
if (require.main === module) {
    main();
}

//     decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
