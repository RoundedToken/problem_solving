// https://www.hackerrank.com/challenges/one-week-preparation-kit-jesse-and-cookies/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-six
function cookies(k, A) {
    //START
    let count = 0;
    let l = A.length;
    let cookies = new Map();
    let flagK = false;
    let flag = false;
    let KEY;
    let limit = Math.ceil(k / 3);
    let last1 = Number.MAX_VALUE;
    let rest = 0;
    let last2;

    //CREATE MAP & COUNTING ZEROES AND REST
    for (let i = 0; i < l; i++) {
        //COUNTING ZEROES
        if (A[i] == 0) {
            count++;
            continue;
        }

        if (A[i] < k) {
            //COUNTING REST & SET LAST 
            if (A[i] >= limit) {
                if (A[i] < last1) last1 = A[i];
                rest++;
            }
            else {
                //CREATE A MAP
                if (cookies.has(A[i])) cookies.set(A[i], cookies.get(A[i]) + 1)
                else cookies.set(A[i], 1)
            }
        } else flagK = true
    }


    //CHEK IF ALL >= K
    if (cookies.size == 0) return 0;

    for (let i = 1; i < limit; i++) {

        if (cookies.has(i)) {

            let value = cookies.get(i)

            if (flag) {
                flag = false
                value--;
                KEY += i * 2;
                if (KEY < k) {

                    if (cookies.has(KEY)) cookies.set(KEY, cookies.get(KEY) + 1)
                    else cookies.set(KEY, 1);

                } else flagK = true
            }

            if (value % 2 == 1) {
                flag = true;
                value--;
                KEY = i;
                count++;
            } else {
            }

            if (value != 0) {
                let v2 = value / 2;
                const i3 = i * 3;
                if (i3 < k) {
                    if (cookies.has(i3)) cookies.set(i3, cookies.get(i3) + v2);
                    else cookies.set(i3, v2);
                } else flagK = true
                count += v2;

            }
            last2 = i
            cookies.delete(i)
        }
    }
    
     if (flag) {
        count--;
        rest++;
    }

    cookies.forEach((val, ki) => {
        if(ki < last1) last1 = ki;
        rest += val;
    })

    if (rest >= 2) flagK = true;
    if (last2 + last1 * 2 >= k || flag == false) count += Math.ceil(rest / 2);
    else count += Math.ceil((rest + 1) / 2);


    if (flagK == false) return -1
    else return count
}
function main() {
     
    //let A = [11, 10, 9, 8, 7, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    //let A = [52, 96, 13, 37];  //0  k = 10
    //A = "13 47 74 12 89 74 18 38"  //5 . k = 90
     //A = "1 62 14";   // 1 .  k = 9
    //let A = [1, 2, 3, 9, 10, 12]; //2 .  k = 7
    //A = "1 1 1" //-1   k = 10
    //let A = [1, 2]
    //let A = [6214, 8543, 9266, 1150, 7498, 7209, 9398, 1529, 1032, 7384, 6784, 34, 1449, 7598, 8795, 756, 7803, 4112, 298, 4967, 1261, 1724, 4272, 1100, 9373]
    //A = "3554 2227 8866 9890 212 8669 2423 7651 3878 3379 1419 6134 5767 859 2848 9309 1449 8408 8041 3367 6676 6382 4136 4871"
    //A = "9660 9902 5775 2183 3974 7742 576 8786 7615 5575 6287 5495 161 3520 344 805 786 3802 4843 7424 634 7916 6989 3499 1216 1293 9965 6299 7899 4763 7272 9785 8469 395 1034 8763 8003 9464 5081 2064 4401 6850 8792 1603 7547 3354 8827 887 8151 2470 9995 7228 8198 5600 1829 8814 5282 3930 2481 6873 9165 497 2158 1752 878 8448 7862 7685 7988 3536 8227 8863 8663 1823 8510 7065 6927 610 4220 7096 7685 6992 976 5081 2389 1844 9843 8741 9582 3479 420 4136"
    let k = 1059589;
    console.log(cookies(k, A));
}
if (require.main === module) {
    main();
}