// https://leetcode.com/problems/magnetic-force-between-two-balls/description/

var maxDistance = function (position, m) {
    position.sort((a, b) => a - b);
    let start = 0;
    let end = position[position.length - 1];
    let ans = -1;
    let mid = start + Math.floor((end - start) / 2);
    while (start < end) {
        if (is_possible(position, mid, m)) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = start + Math.floor((end - start) / 2);
    }
    return ans;
};

var is_possible = function (position, mid, m) {
    let counter = 1;
    let last_pos = position[0];

    for (let i = 0; i < position.length; i++) {
        if (position[i] - last_pos >= mid) {
            counter++;
            if (counter == m) {
                return true;
            }
            last_pos = position[i];
        }
    }
    return false;
};
