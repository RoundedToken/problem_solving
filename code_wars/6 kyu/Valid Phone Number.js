// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

function validPhoneNumber(phoneNumber) {
    return /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/.test(phoneNumber);
}

function main() {
    phoneNumber = '(123) 456-7890';
    console.log(validPhoneNumber(phoneNumber));
}
if (require.main === module) {
    main();
}

//   "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false
