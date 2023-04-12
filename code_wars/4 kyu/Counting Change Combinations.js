// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

function perms(currentMoney, coins, currentVariant = [], variants = []) {
    for (let i in coins) {
        const coin = coins[i];
        const variant = Array.from(currentVariant);
        const result = currentMoney - coin;
        if (result > 0) {
            variant.push(coin);
            perms(result, coins.slice(i), variant, variants);
        } else if (result === 0) {
            variant.push(coin);
            variants.push(variant);
        }
    }
    return variants;
}

function countChange(money, coins) {
    coins = coins.filter((v) => v <= money);
    const variants = perms(money, coins);
    console.log(variants);
    return variants.length;
}

function main() {
    const money = 10;
    const coins = [5, 2, 3];
    console.log(countChange(money, coins));
}
if (require.main === module) {
    main();
}

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0
