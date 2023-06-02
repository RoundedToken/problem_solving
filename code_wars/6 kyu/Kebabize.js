// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
    let newStr = '';

    for (let letter of str) {
        if (letter.toLowerCase() === letter.toUpperCase()) continue;

        if (letter === letter.toLowerCase()) newStr += letter;
        else if (letter === letter.toUpperCase()) newStr += '-' + letter.toLowerCase();
    }

    return newStr.replace(/^-+/, '');
}

function main() {
    console.log(kebabize('Xbfsu'));
}
if (require.main === module) {
    main();
}

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
