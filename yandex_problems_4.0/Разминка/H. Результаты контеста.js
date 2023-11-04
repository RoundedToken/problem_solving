const solution = (input) => {
    let [a, b, n] = input.trim().split('\n');
    a = Number(a);
    b = Number(b);
    n = Number(n);

    const min2 = Math.ceil(b / n);

    if (a > min2) {
        return 'yes';
    } else {
        return 'no';
    }
};

function main() {
    console.log(
        solution(`60
    30
    4`)
    );
    console.log(
        solution(`30
    30
    1`)
    );
    console.log(
        solution(`30
    150
    4`)
    );
}
if (require.main === module) {
    main();
}
