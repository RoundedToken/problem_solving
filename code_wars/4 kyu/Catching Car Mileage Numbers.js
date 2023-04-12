// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
function isInteresting(number, awesomePhrases) {
    function zeroes(num) {
        if (Number(num.toString().slice(1)) == 0 ) return true
        else return false
    }
    function same(num) {
        let str = num.toString();
        let x = str.charAt(0);
        for (let i of str) if (i != x) return false
        return true
    }
    function increase(num) {
        let x = "1234567890";
        if (x.includes(num.toString())) return true
        else return false
    }
    function decrease(num) {
        let x = "9876543210";
        if (x.includes(num.toString())) return true
        else return false
    }
    function palindrome(num) {
        let str = num.toString();
        if (str.split("").reverse().join("") == str) return true
        else return false
    }
    function awsPhrase(num) {
        let str = num.toString();
        for (let i of awesomePhrases) if (i.toString() == str) return true
        return false
    }
    if (number < 98) return 0
    else if (number == 98 || number == 99) return 1
    else {
        let status = 0;;
        let x1 = number + 1;
        let x2 = number + 2;
        if (zeroes(x1) || same(x1) || increase(x1) || decrease(x1) || palindrome(x1) || awsPhrase(x1)) status = 1;
        if (zeroes(x2) || same(x2) || increase(x2) || decrease(x2) || palindrome(x2) || awsPhrase(x2)) status = 1;
        if (zeroes(number) || same(number) || increase(number) || decrease(number) || palindrome(number) || awsPhrase(number)) status = 2;
        return status
    }
  }
function main() {
    let number = 246;
    let awesomePhrases = [246];
    console.log(isInteresting(number, awesomePhrases));
}
if (require.main === module) {
    main();
}