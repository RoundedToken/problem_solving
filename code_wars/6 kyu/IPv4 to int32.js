// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript

function ipToInt32(ip) {
    return parseInt(
        ip
            .split('.')
            .map((slice) => Number(slice).toString(2).padStart(8, '0'))
            .join(''),
        2
    );
}

function main() {
    console.log(ipToInt32('128.32.10.1'));
}
if (require.main === module) {
    main();
}
