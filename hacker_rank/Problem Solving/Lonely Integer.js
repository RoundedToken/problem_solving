// https://www.hackerrank.com/challenges/lonely-integer/problem?isFullScreen=true
function lonelyinteger(a) {
    for (let i in a) {
       if (a.includes(a[i], Number(i) + 1) == false) return a[i] 
       else a.splice(a.lastIndexOf(a[i]), 1)
    }

}
function main() {
    let a = [0, 0, 1]
    a = "84 48 13 20 61 20 33 97 34 45 6 63 71 66 24 57 92 74 6 25 51 86 48 15 64 55 77 30 56 53 37 99 9 59 57 61 30 97 50 63 59 62 39 32 34 4 96 51 8 86 10 62 16 55 81 88 71 25 27 78 79 88 92 50 16 8 67 82 67 37 84 3 33 4 78 98 39 64 98 94 24 82 45 3 53 74 96 9 10 94 13 79 15 27 56 66 32 81 77"
   a = "59 88 14 8 85 1 94 74 57 96 39 2 47 43 35 17 53 52 92 31 99 48 94 30 92 60 32 45 88 13 39 50 22 65 89 46 65 76 57 67 99 35 76 46 85 82 45 62 53 80 74 22 31 52 82 13 41 96 2 1 80 62 4 20 50 89 59 67 60 8 41 14 47 48 17 4 43 30 32"
    console.log(lonelyinteger(a));

}
if (require.main === module) {
    main();
}