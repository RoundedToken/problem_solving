// https://leetcode.com/problems/number-of-flowers-in-full-bloom/?envType=daily-question&envId=2023-10-11

const fullBloomFlowers = (flowers, persons) => {
    const list = []; //create a list that holds all the flower start and end times
    for (const [start, end] of flowers) {
        list.push([start, 1]); //if flower, we give it a value 1
        list.push([end + 1, -1]); //if that flower goes, we take that 1 away -> 1+ (-1) = 0;
    }
    list.sort((a, b) => a[0] - b[0] || (a[0] === b[0] && a[1] - b[1])); //sort by times;

    const map = new Map();
    let count = 0;

    //map flower counts and times
    //if there are overlapping times, we keep the most updated value;
    for (let [t, c] of list) {
        count += c;
        map.set(t, count);
    }

    //get all the times from the hashmap
    const keys = [...map.keys()];

    const min = Math.min(...keys);
    const max = Math.max(...keys);

    const res = [];

    for (let person of persons) {
        // if the visit time is earlier or later than any of the flowers' bloom times, there's no need to explore further
        if (person > max || person < min) {
            res.push(0);
            continue;
        }

        //binary search
        const time = bs(keys, person);

        res.push(map.get(time));
    }

    return res;
};

//binary search helper function
const bs = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) return arr[m];
        if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return arr[r];
};
