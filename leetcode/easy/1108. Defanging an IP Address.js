// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
    return address.replaceAll('.', '[.]');
};
