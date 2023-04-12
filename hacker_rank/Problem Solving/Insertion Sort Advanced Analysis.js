https://www.hackerrank.com/challenges/insertion-sort/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function insertionSort(arr) {
    function mergeAndCount(arr, l, m, r)
    {    
        // Left subarray
        let left = [];
              
        for(let i = l; i < m + 1; i++)
        {
            left.push(arr[i]); 
        }
              
        // Right subarray
        let right = [];
      
        for(let i = m + 1; i < r + 1; i++)
        {
            right.push(arr[i]);
        }
              
        let i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && 
               j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
              
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
          
    // Merge sort function
    function mergeSortAndCount(arr, l, r)
    {        
        // Keeps track of the inversion count 
        // at a particular node of the recursion 
        //                             tree
        let count = 0;
          
        if (l < r) 
        {
            let m = Math.floor((l + r) / 2);
                  
             // Total inversion count = left subarray 
             // count + right subarray count + merge count
                  
             // Left subarray count
             count += mergeSortAndCount(arr, l, m);
                  
             // Right subarray count
             count += mergeSortAndCount(arr, m + 1, r);
                  
             // Merge count
             count += mergeAndCount(arr, l, m, r);
        }
        return count;
    }
    return mergeSortAndCount(arr, 0, arr.length - 1)

}
function main() {
    let arr = [
        12, 15, 1, 5,
        6, 14, 11
    ]
    console.log(insertionSort(arr));
}
if (require.main === module) {
    main();
}