// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
    return (
        '(' +
        s
            .split(';')
            .map((v) => {
                v = v.split(':');
                v[0] = v[0].toUpperCase();
                v[1] = v[1].toUpperCase();
                return v;
            })
            .sort((a, b) => {
                if (a[1] < b[1]) return -1;
                else if (a[1] > b[1]) return 1;
                else {
                    if (a[0] < b[0]) return -1;
                    else if (a[0] > b[0]) return 1;
                    return 0;
                }
            })
            .map((v) => v.reverse().join(', '))
            .join(')(') +
        ')'
    );
}

function main() {
    const s =
        'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
    console.log(meeting(s));
}
if (require.main === module) {
    main();
}

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
