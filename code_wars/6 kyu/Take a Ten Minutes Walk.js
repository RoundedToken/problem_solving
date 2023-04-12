// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    let l = walk.length;
    if (l != 10) return false;
    else {
        for (let i = 0; i < 10; i++) {
            if (walk[i] == "n") x++;
            if (walk[i] == "s") x--;
            if (walk[i] == "w") y++;
            if (walk[i] == "e") y--;
        }
        if (x == 0 && y == 0) return true
        else return false
    } 
}
function main() {
    let walk = ['w','e','w','e','w','e','w','e','w','e','w','e'];
    console.log(isValidWalk(walk));
}
if (require.main === module) {
    main();
}