// https://leetcode.com/problems/design-parking-system/

var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
    const types = { 1: 'big', 2: 'medium', 3: 'small' };
    if (this[types[carType]] > 0) {
        this[types[carType]]--;
        return true;
    } else return false;
};
