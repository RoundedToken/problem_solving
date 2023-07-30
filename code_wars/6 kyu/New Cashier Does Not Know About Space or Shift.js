// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/csharp

function getOrder(input) {
    const dictionary = [
        'burger',
        'fries',
        'chicken',
        'pizza',
        'sandwich',
        'onionrings',
        'milkshake',
        'coke',
    ];
    const regExp = new RegExp(dictionary.join('|'), 'gi');
    return input
        .match(regExp)
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
        .sort((a, b) => {
            const aInd = dictionary.indexOf(a.toLowerCase());
            const bInd = dictionary.indexOf(b.toLowerCase());
            return aInd - bInd;
        })
        .join(' ');
}
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function main() {
    console.log(getOrder('mIlkshakepizzachickenfriescokeBurgerpizzasandwichmilkshakepizza'));
}
if (require.main === module) {
    main();
}
