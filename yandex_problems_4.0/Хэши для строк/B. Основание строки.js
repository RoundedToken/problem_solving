function getBaseLength(str) {
    const l = str.length;

    function isBase(baseL) {
        const prefix = str.substring(0, l - baseL);
        const suffix = str.substring(baseL);

        return prefix === suffix;
    }

    for (let i = 1; i <= l; i++) {
        if (isBase(i)) return i;
    }
}

function main() {
    console.log(getBaseLength(`zzz`));
    console.log(getBaseLength(`bcabcab`));
    console.log(getBaseLength(`abaabaab`));
    console.log(getBaseLength(`bcabcadbca`));
    console.log(getBaseLength(`abcdefghijklmnopqrstuvwxyabcdefghijklm`));
    console.log(getBaseLength(`abcabcabcabcabc`));
}
if (require.main === module) {
    main();
}
