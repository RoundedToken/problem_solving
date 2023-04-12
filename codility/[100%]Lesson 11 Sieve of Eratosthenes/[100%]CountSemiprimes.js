// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
    
   /* let sieve = [];
    for (let i = 0; i < n + 1; i++) {
        sieve[i] = true;
    }
    sieve[0] = false;
    sieve[1] = false;
    let k;
    let i = 2;
    *while (i * i <= n) {
        if (sieve[i]) {
            k = i * i;
        }
        while (k <= n) {
            sieve[k] = false;
            k += i;

        }
        i += 1;
    }
    let B = [];
    for (let g = 0; g < n + 1; g++) {
        if (sieve[g]) {
            B.push(g);
        }
    }
    return B;*/
    
    
    function solution (N, P, Q){
        function sPrimes(N){    
            let pr = [];
            
            let times = N+1;
            while(times--) pr[times] = 1;
            pr[0] = pr[1] = 0;
        
            for (let i = 2; i*i <= N; i++) {
                if (pr[i] === 1)
                    for (let j = 2; j <= N/i; j++)
                        if (pr[i*j]) pr[i*j] = 0;
            }
            
            for(let i = 0; i <= Math.sqrt(N); i++){
                if(pr[i]===1){
                    let j = i;
                    while(i*j <=N ){
                        if(pr[j]===1){
                            pr[i*j] = 2;
                        }
                        j++;
                    }
                }
            }
            
            return pr;
        }
        let pr = sPrimes(N);
        let result = [];
        
        let times = N+1;
        let count = [];
        while(times--) count[times] = 0;
        count[0] = 0;
        for(let i = 1; i < N+1; i++){
            if (pr[i]===2)
                count[i] = count[i-1] + 1;
            else      
                count[i] = count[i-1]
        }
    
        for(let j = 0; j < P.length; j++){
            result[j] = count[Q[j]] - count[P[j]-1];
        }
        return result;                    
    }
    
function main() {
    let N = 50;
    let P = [1,4,16];
    let Q = [26,10,20];
    console.log(solution(N,P,Q));
}
if (require.main === module) {
    main();
}