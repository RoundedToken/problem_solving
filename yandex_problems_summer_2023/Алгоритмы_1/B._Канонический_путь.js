const path = (str) => {
    const arr = str.split(/\/+/);
    const filter = arr.filter((char) => char !== '' && char !== '.');
    while (filter.includes('..')) {
        const index = filter.indexOf('..');
        index === 0 ? filter.shift() : filter.splice(index - 1, 2);
    }
    return '/' + filter.join('/');
};

function main() {
    console.log(path('/../'));
    console.log(path('/home//foo'));
    console.log(path('/home/'));
    console.log(path('/home//foo/../zoo'));
    console.log(path('/home/./foo/../...'));
    console.log(path('././..'));
    console.log(path(''));
    console.log(path('home'));
    console.log(path('../home'));
}
if (require.main === module) {
    main();
}
