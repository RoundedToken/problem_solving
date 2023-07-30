// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year) {
    const century = Math.ceil(Number(year) / 100).toString();
    const lastChar = century.charAt(century.length - 1);
    const secondChar = century.charAt(century.length - 2);
    if (secondChar === '1') return century + 'th';
    return (
        century +
        (lastChar === '1' ? 'st' : lastChar === '2' ? 'nd' : lastChar === '3' ? 'rd' : 'th')
    );
}

function main() {
    console.log(whatCentury('1999'));
    console.log(whatCentury('2001'));
}
if (require.main === module) {
    main();
}
