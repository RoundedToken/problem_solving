// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
function queueTime(customers, n) {
    let time = 0;
    while (customers.length > 0) {
        let x = Math.min(...customers.slice(0, n));
        for (let i = 0; i < n; i++) {
            customers[i] -= x;
        }
        customers = customers.filter((val) => { return val > 0 })
        time += x;
    }
    return time
  }
function main() {
    let customers = [10,2,3,3];
    let n = 2;
    console.log(queueTime(customers, n));
}
if (require.main === module) {
    main();
}