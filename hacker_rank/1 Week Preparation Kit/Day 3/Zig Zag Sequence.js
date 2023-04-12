// https://www.hackerrank.com/challenges/one-week-preparation-kit-zig-zag-sequence/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
function processData(input) {
    let Input;
    if(Array.isArray(input)){
        Input = input
    }else{
        Input = [input];
        return Input;
    }
    //Enter your code here
    let tamanho = Input.length;
    let maior = 0;

    let resultado = [];

    for(let i = 0; i < tamanho; i++){
        if(Input[i] > maior){
            maior = Input[i];
        }
    }
    let meio = ((tamanho/2) - 1).toFixed();

    resultado[meio] = maior;

    console.log(resultado[0])

    let menor = Input[0];

    for(let i = 0; i < tamanho; i++){    
        if(resultado[i] == undefined  && i < meio){
            resultado[i] = Input.sort().shift();
            
            if(resultado[i] < menor){
                menor = resultado[i];
            }
            resultado[0] = menor;
        }else{
            resultado[i] = Input.sort().pop();

        }
    }

    return resultado;
} 
function main() {
}
if (require.main === module) {
    main();
}