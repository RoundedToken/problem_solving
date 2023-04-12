// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let times = 0;
        while (h >= window) {
            times++;
            h *= bounce;
            if (h <= window) break;
            times++;
            //console.log(h)
        }
        return times
    } else return -1;
  }
function main() {
    let h = 3;
    let bounce = 0.66;
    let window = 1.5; 
    console.log(bouncingBall(h,  bounce,  window));
}
if (require.main === module) {
    main();
}
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).