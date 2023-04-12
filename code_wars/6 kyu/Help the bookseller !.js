// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfArt, listOfCat) {
    const res = listOfCat.map(
        (v) =>
            `(${v} : ${listOfArt.reduce((p, c) => {
                let x = c.split(' ');
                if (x[0][0] === v) p += Number(x[1]);
                return p;
            }, (p = 0))})`
    );
    return res.filter((v) => v.split(' : ')[1][0] !== '0').length === 0 ? '' : res.join(' - ');
}

function main() {
    const listOfArt = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    const listOfCat = ['A', 'B', 'C', 'D'];
    console.log(stockList(listOfArt, listOfCat));
}
if (require.main === module) {
    main();
}

// b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
//     c = ["A", "B", "C", "D"]
//     res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
