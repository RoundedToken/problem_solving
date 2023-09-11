// https://leetcode.com/problems/to-be-or-not-to-be/description/

var expect = function (val) {
    this.val = val;

    this.toBe = (val) => {
        if (val === this.val) return true;
        else throw new Error('Not Equal');
    };

    this.notToBe = (val) => {
        if (val !== this.val) return true;
        else throw new Error('Equal');
    };

    return this;
};
