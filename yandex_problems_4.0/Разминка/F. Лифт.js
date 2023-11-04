const solution = (input) => {
    let [capacity, _, ...floors] = input.trim().split('\n');
    capacity = Number(capacity);
    floors = floors.map((f) => +f);
    let time = 0n;

    for (const ind in floors) {
        const passengers = floors[ind];
        if (passengers === 0) continue;
        const trips = Math.floor(passengers / capacity);
        floors[ind] = passengers % capacity;
        time += 2n * BigInt(trips) * BigInt(+ind + 1);
    }

    let currentCapacity = capacity;
    let currentFloor;

    for (let ind = floors.length - 1; ind >= 0; ind--) {
        const passengers = floors[ind];
        if (passengers === 0) continue;
        if (currentFloor === undefined) currentFloor = ind + 1;
        currentCapacity -= passengers;
        if (currentCapacity <= 0) {
            currentCapacity += capacity;
            time += 2n * BigInt(currentFloor);
            currentFloor = currentCapacity !== capacity ? ind + 1 : undefined;
        }
    }

    if (currentFloor !== undefined) time += 2n * BigInt(currentFloor);

    return time;
};

const solutionWorked = (input) => {
    let [count, _, ...floors] = input.trim().split('\n');
    count = Number(count);
    floors = floors.map((f) => +f);
    let time = 0;

    while (floors.at(-1) === 0) {
        floors.pop();
    }

    while (floors.length > 0) {
        const height = floors.length;

        let x = count;
        while (x > 0 && floors.length > 0) {
            if (floors.at(-1) !== 0) {
                floors[floors.length - 1]--;
                x--;
            }
            if (floors.at(-1) === 0) {
                floors.pop();
            }
        }
        while (floors.at(-1) === 0) {
            floors.pop();
        }
        time += height * 2;
    }

    return time;
};

function generateTest() {
    // Генерируем случайное кол-во людей в лифте
    let k = Math.floor(Math.random() * 10) + 1;

    // Генерируем случайное кол-во этажей
    let n = Math.floor(Math.random() * 10) + 1;

    // Генерируем массив с людьми на этажах
    let floors = [];
    for (let i = 0; i < n; i++) {
        floors.push(Math.floor(Math.random() * 10));
    }

    // Формируем тест
    let test = [k, n];
    test.push(...floors);

    return test.join('\n');
}

function main() {
    const str = generateTest();

    console.log(solution(str), solutionWorked(str));
    //     console.log(
    //         solution(`2
    //    9999
    //    1
    //    1
    //    1`),
    //         solutionWorked(`2
    //    9999
    //    1
    //    1
    //    1`)
    //     );
    // console.log(
    //     solution(`3
    // 3
    // 2
    // 2
    // 3
    // 4`)
    // );
    // console.log(
    //     solution(`2
    // 3
    // 3
    // 0
    // 1`)
    // );
    // console.log(
    //     solution(`2
    // 3
    // 3
    // 0
    // 1
    // 0
    // 1
    // 1`)
    // );
    // console.log(
    //     solution(`3
    // 3
    // 1
    // 4
    // 1`)
    // );
    // console.log(
    //     solution(`3
    //     5
    //     0
    //     10
    //     0
    //     0
    //     5`)
    // );
    // console.log(
    //     solution(`3
    // 99999
    // 1
    // 1
    // 1
    // 1
    // 1`)
    // );
    // console.log(
    //     solution(`2
    // 3
    // 0
    // 1
    // 0
    // 1`)
    // );
}
if (require.main === module) {
    main();
}
