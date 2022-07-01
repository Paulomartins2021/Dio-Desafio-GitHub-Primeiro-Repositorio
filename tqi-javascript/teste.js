//console.log ("Hello word");

function returnEvenValues(array){
    let evevNums = [];
    for(let i = 0 ; i < array.length; i++){
        if (array[i] % 2 === 0){
            evevNums.push(array[i]);
        }else{
            console.log(`${array[i]} nao e par`)
        }
    }
    console.log('os numeros pares sao '+ evevNums);
}
let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);
