// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
    return this.map((v) => v ** 2);
};
Array.prototype.cube = function () {
    return this.map((v) => v ** 3);
};
Array.prototype.average = function () {
    return this.reduce((prev, cur) => (prev += cur), (prev = 0)) / this.length;
};
Array.prototype.sum = function () {
    return this.reduce((prev, cur) => (prev += cur), (prev = 0));
};
Array.prototype.even = function () {
    return this.filter((v) => !(v % 2));
};
Array.prototype.odd = function () {
    return this.filter((v) => v % 2);
};

function main() {
    var numbers = [1, 2, 3, 4, 5];
    console.log(numbers.even());
}
if (require.main === module) {
    main();
}

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]
