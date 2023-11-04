const toDefault = (str) => {
    return str.trim().split('').sort().join('');
};

const isAnagram = (input) => {
    const [s1, s2] = input.trim().split('\n');

    if (toDefault(s1) === toDefault(s2)) {
        return 'YES';
    } else {
        return 'NO';
    }
};

function main() {
    console.log(
        isAnagram(`dusty
    study`)
    );
}
if (require.main === module) {
    main();
}
