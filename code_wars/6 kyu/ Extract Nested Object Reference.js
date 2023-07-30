// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.',
            },
        },
    },
};

Object.prototype.hash = function (string) {
    const tokens = string.split('.');
    let curr = this;
    for (const token of tokens) {
        const value = curr[token];
        if (value) curr = value;
        else return undefined;
    }
    return curr;
};

function main() {
    console.log((obj.hash('person.name'), 'joe'));
}
if (require.main === module) {
    main();
}
