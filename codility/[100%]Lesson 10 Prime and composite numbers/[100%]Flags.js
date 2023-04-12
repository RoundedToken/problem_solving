// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
function solution(A) {
    let peaks = [];
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
    }
    peaks = [
        12,  17,  24,  41,  48,  75,  93,  99, 109, 131, 133, 143,
       160, 166, 169, 176, 194, 201, 203, 205, 209, 216, 228, 232,
       238, 242, 268, 280, 291, 294, 314, 319, 324, 329, 331, 340,
       343, 347, 353, 364, 370, 396, 406, 415, 438, 458, 461, 467,
       478, 485, 488, 503, 530, 534, 548, 561, 590, 611, 619, 632,
       651, 658, 665, 669, 698, 713, 717, 726, 754, 764, 771, 773,
       776, 779, 783, 792, 810, 832, 836, 853, 859, 866, 868, 870,
       879, 881, 887, 891, 894, 910, 917, 923, 931, 938, 944, 948,
       973, 977, 982, 984
     ]

    let l = peaks.length;
    if (l < 1) return 0
    if (l < 2) return 1;
    let flags = Math.ceil(Math.sqrt(peaks[l - 1] - peaks[0]));


    console.log(peaks, l)
    for (;;) {

        let count = l - flags ;
        let countFlags = 1;

        for (let i = 0; i < l - 1; ) {

            for (let g = i + 1; g < l; g++) {

                if (peaks[g] - peaks[i] < flags)  count--; 
                else  {

                    i = g;
                    countFlags++;
                    break;
                }

                if (count < 0) break;

            }
            
            if (countFlags == flags) break
            if (count < 0) break

        }
        if (count < 0) flags--;
        else break
    }
    return flags
  
}
function main() {
    let A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}