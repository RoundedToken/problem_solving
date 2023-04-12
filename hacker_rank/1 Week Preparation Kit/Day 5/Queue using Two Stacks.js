// https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
function processData(input) {
    let stack1 = [];
    let stack2 = [];
    let queries = input.split("\n").slice(1);
    for (let i = 0; i < queries.length; i++) {
        if (queries[i].charAt(0) === "1") {
            let pair = queries[i].split(" ");
            stack1.push(pair[1]);
        }
        if (queries[i].charAt(0) === "2") {
            while (stack1.length > 0) {
                stack2.push(stack1.pop());
            }
            stack2.pop();
            while (stack2.length > 0) {
                stack1.push(stack2.pop());
            }
        }
        if (queries[i].charAt(0) === "3") {
            console.log(stack1[0]);
        }
    }
}
function main() {
}
if (require.main === module) {
    main();
}