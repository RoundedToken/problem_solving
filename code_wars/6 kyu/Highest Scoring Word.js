// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x){
    let alp = Array.from("abcdefhgijklmnopqrstuvwxyz");
    let values =  x.split(" ").map((v) => v.split("").reduce((x, v) => x + alp.indexOf(v) + 1, 0));
    let max = values.indexOf(Math.max(...values));
    console.log(values)
    return x.split(" ")[max];
}
function main() {
    let x = "dspuuiqkfvfgofqmhyiashtjhgjy esyfxdsxpdsdogsczgisaptmrodl xfawryfkifjcpuylmtfjvcarzbaf wyqseocewrctthqvdkfbmlnjpgwl"
    console.log(high(x));
}
if (require.main === module) {
    main();
}