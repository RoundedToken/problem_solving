// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
    let origin = JSON.stringify(this);
    other = JSON.stringify(other);
    origin = origin.replaceAll(/"[^"]*"/g, '*');
    other = other.replaceAll(/"[^"]*"/g, '*');
    origin = origin
        .split('')
        .filter((v) => v === '[' || v === ']' || v === ',')
        .join('');
    other = other
        .split('')
        .filter((v) => v === '[' || v === ']' || v === ',')
        .join('');
    console.log(origin);
    console.log(other);
    return origin === other ? true : false;
};

function main() {
    const first = [1, [1, 1]];
    const second = [2, [2, 2]];
    console.log(first.sameStructureAs(second));
}
if (require.main === module) {
    main();
}
// assert.isTrue([1, '[', ']'].sameStructureAs(['[', ']', 1]), "[1,'[',']'] same as ['[',']',1]");
//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
