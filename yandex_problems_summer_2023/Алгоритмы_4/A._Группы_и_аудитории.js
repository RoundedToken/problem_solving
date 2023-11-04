const solution = (str) => {
    let [groupsL, groups, roomsL, rooms] = str.trim().split('\n');
    groups = groups
        .trim()
        .split(' ')
        .sort((a, b) => a - b);
    rooms = rooms
        .trim()
        .split(' ')
        .sort((a, b) => a - b);

    let pos = 0;
    let count = 0;

    for (let group of groups) {
        while (pos < roomsL && rooms[pos] < group) {
            pos++;
        }
        if (pos != roomL) {
            count++;
            pos++;
        }
    }
    return count;
};

function main() {
    console.log(
        solution(`5
    2 2 2 2 2
    7
    1 2 2 2 2 3 1`),
        3
    );
    //     console.log(
    //         solution(`5
    //     1 2 3 4 5
    //     5
    //     3 3 3 3 3`),
    //         3
    //     );
    //     console.log(
    //         solution(
    //             `3
    // 3 1 2
    // 2
    // 1 1`
    //         ),
    //         1
    //     );
    //     console.log(
    //         solution(
    //             `2
    // 1 2
    // 3
    // 3 2 1`
    //         ),
    //         2
    //     );
}
if (require.main === module) {
    main();
}
