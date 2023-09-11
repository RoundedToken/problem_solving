// https://leetcode.com/problems/check-if-object-instance-of-class/description/

var checkIfInstanceOf = function (obj, classFunction) {
    while (obj != null) {
        if (obj.constructor === classFunction) {
            return true;
        }

        obj = Object.getPrototypeOf(obj);
    }

    return false;
};
