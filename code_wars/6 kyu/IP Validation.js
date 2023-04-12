// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
    arr = str.split('.');

    return arr.length !== 4
        ? false
        : arr
              .map((v) =>
                  !(
                      v !== '' &&
                      !v.includes('\n') &&
                      !v.includes(' ') &&
                      !v.includes('e') &&
                      Number(v) >= 0 &&
                      Number(v) <= 255
                  )
                      ? false
                      : v.length > 1
                      ? v.charAt(0) === '0'
                          ? false
                          : true
                      : true
              )
              .includes(false)
        ? false
        : true;
}

function main() {
    str = ' 1.2.3.4';
    console.log(isValidIP(str));
}
if (require.main === module) {
    main();
}
