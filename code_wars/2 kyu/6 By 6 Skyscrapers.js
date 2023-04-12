// https://www.codewars.com/kata/5679d5a3f2272011d700000d/train/javascript

function createLayout() {
    let id = 1;
    return Array(6)
        .fill()
        .map(() =>
            Array(6)
                .fill()
                .map(() => {
                    return {
                        id: id++,
                        collection: new Set([1, 2, 3, 4, 5, 6]),
                    };
                })
        );
}

function createField() {
    return Array(6)
        .fill()
        .map(() => Array(6).fill());
}

function addCellsProps(layout, clues) {
    //Up
    let cluesIndex = 0;
    for (let col = 0; col < 6; col++) {
        const vision = clues[cluesIndex++];
        if (vision !== 0) {
            for (let row in layout) {
                layout[row][col].upVision = vision;
                layout[row][col].upDistance = Number(row) + 1;
            }
        }
    }
    //Right
    for (let row = 0; row < 6; row++) {
        const vision = clues[cluesIndex++];
        if (vision !== 0) {
            for (let col = 5; col >= 0; col--) {
                layout[row][col].rightVision = vision;
                layout[row][col].rightDistance = 6 - col;
            }
        }
    }
    //Down
    for (let col = 5; col >= 0; col--) {
        const vision = clues[cluesIndex++];
        if (vision !== 0) {
            for (let row = 5; row >= 0; row--) {
                layout[row][col].downVision = vision;
                layout[row][col].downDistance = 6 - row;
            }
        }
    }
    //Left
    for (let row = 5; row >= 0; row--) {
        const vision = clues[cluesIndex++];
        if (vision !== 0) {
            for (let col in layout[row]) {
                layout[row][col].leftVision = vision;
                layout[row][col].leftDistance = Number(col) + 1;
            }
        }
    }
}

function reduceUsingClues(layout) {
    for (let row of layout) {
        for (let col of row) {
            //Up
            if (col.upVision) {
                const maxHight = 6 - col.upVision + col.upDistance;
                for (let height = maxHight; height < 6; height++) {
                    col.collection.delete(height + 1);
                }
                delete col['upVision'];
                delete col['upDistance'];
            }
            //Right
            if (col.rightVision) {
                const maxHight = 6 - col.rightVision + col.rightDistance;
                for (let height = maxHight; height < 6; height++) {
                    col.collection.delete(height + 1);
                }
                delete col['rightVision'];
                delete col['rightDistance'];
            }
            //Down
            if (col.downVision) {
                const maxHight = 6 - col.downVision + col.downDistance;
                for (let height = maxHight; height < 6; height++) {
                    col.collection.delete(height + 1);
                }
                delete col['downVision'];
                delete col['downDistance'];
            }
            //Left
            if (col.leftVision) {
                const maxHight = 6 - col.leftVision + col.leftDistance;
                for (let height = maxHight; height < 6; height++) {
                    col.collection.delete(height + 1);
                }
                delete col['leftVision'];
                delete col['leftDistance'];
            }
        }
    }
}

function clearLayout(layout, row, col, elem) {
    for (let i = 0; i < 6; i++) {
        layout[row][i].collection.delete(elem);
        layout[i][col].collection.delete(elem);
    }
}

function rowCount(layout, row, col, elements) {
    if (layout[row][col].collection.has(1)) {
        elements.one.count++;
        elements.one.index = col;
    }
    //Count twos in a row
    if (layout[row][col].collection.has(2)) {
        elements.two.count++;
        elements.two.index = col;
    }
    //Count threes in a row
    if (layout[row][col].collection.has(3)) {
        elements.three.count++;
        elements.three.index = col;
    }
    //Count fours in a row
    if (layout[row][col].collection.has(4)) {
        elements.four.count++;
        elements.four.index = col;
    }
    //Count fives in a row
    if (layout[row][col].collection.has(5)) {
        elements.five.count++;
        elements.five.index = col;
    }
    //Count sixes in a row
    if (layout[row][col].collection.has(6)) {
        elements.six.count++;
        elements.six.index = col;
    }
}

function check(layout) {
    for (let row in layout) {
        const elements = {
            one: { count: 0 },
            two: { count: 0 },
            three: { count: 0 },
            four: { count: 0 },
            five: { count: 0 },
            six: { count: 0 },
        };
        for (let col in layout) {
            if (layout[row][col].collection.size === 1) return false;
            rowCount(layout, row, col, elements);
        }
        if (elements.one.count === 1) return false;
        if (elements.two.count === 1) return false;
        if (elements.three.count === 1) return false;
        if (elements.four.count === 1) return false;
        if (elements.five.count === 1) return false;
        if (elements.six.count === 1) return false;
    }
    return true;
}

function fillField(field, layout) {
    for (let row in layout) {
        const elements = {
            one: { count: 0 },
            two: { count: 0 },
            three: { count: 0 },
            four: { count: 0 },
            five: { count: 0 },
            six: { count: 0 },
        };
        for (let col in layout) {
            //Search for collection with single element
            if (layout[row][col].collection.size === 1) {
                const elem = Array.from(layout[row][col].collection)[0];
                field[row][col] = elem;
                clearLayout(layout, row, col, elem);
            }

            //Count ones in a row
            rowCount(layout, row, col, elements);
        }
        if (elements.one.count === 1) {
            layout[row][elements.one.index].collection = new Set([]);
            field[row][elements.one.index] = 1;
            clearLayout(layout, row, elements.one.index, 1);
        }
        if (elements.two.count === 1) {
            layout[row][elements.two.index].collection = new Set([]);
            field[row][elements.two.index] = 2;
            clearLayout(layout, row, elements.two.index, 2);
        }
        if (elements.three.count === 1) {
            layout[row][elements.three.index].collection = new Set([]);
            field[row][elements.three.index] = 3;
            clearLayout(layout, row, elements.three.index, 3);
        }
        if (elements.four.count === 1) {
            layout[row][elements.four.index].collection = new Set([]);
            field[row][elements.four.index] = 4;
            clearLayout(layout, row, elements.four.index, 4);
        }
        if (elements.five.count === 1) {
            layout[row][elements.five.index].collection = new Set([]);
            field[row][elements.five.index] = 5;
            clearLayout(layout, row, elements.five.index, 5);
        }
        if (elements.six.count === 1) {
            layout[row][elements.six.index].collection = new Set([]);
            field[row][elements.six.index] = 6;
            clearLayout(layout, row, elements.six.index, 6);
        }
    }
}

function solvePuzzle(clues) {
    //Create layout of field
    const layout = createLayout();

    //Create field
    const field = createField();

    //Add vision and distance to each cell
    addCellsProps(layout, clues);

    //Reduce collections using clues
    reduceUsingClues(layout);

    let isSolve = check(layout);
    while (!isSolve) {
        fillField(field, layout);
        isSolve = check(layout);
    }

    // fillField(field, layout);

    for (let row of layout) {
        for (let col of row) {
            console.log(col.id);
            console.log(col.collection);
        }
    }
    // console.log(layout);
    console.table(field);
}

function main() {
    const clues = [3, 2, 2, 3, 2, 1, 1, 2, 3, 3, 2, 2, 5, 1, 2, 2, 4, 3, 3, 2, 1, 2, 2, 4];
    console.log(solvePuzzle(clues));
}
if (require.main === module) {
    main();
}
