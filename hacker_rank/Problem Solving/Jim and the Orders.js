// https://www.hackerrank.com/challenges/jim-and-the-orders/problem?isFullScreen=true
function jimOrders(orders) {
    for (let i in orders) {
        orders[i][2] = Number(i) + 1
    }
    orders.forEach((val, index) => {
        orders[index][1] = orders[index][0] + orders[index][1]
    })
    orders = orders.sort((a, b) => a[1] - b[1])

    let solution = [];
    for (let i in orders) {
        solution.push(orders[i][2])
    }
    return solution
}
function main() {
    let orders = [ [ 8, 1 ], [ 4, 2 ], [ 5, 6 ], [ 3, 1 ], [ 4, 3 ] ];
    console.log(jimOrders(orders));
}
if (require.main === module) {
    main();
}