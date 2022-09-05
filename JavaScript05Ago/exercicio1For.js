//Exercicio de laços e estruturas de seleção utilizando JavaScript
//Utilizando funções no programa


/*Informar todos os números de 1000 a 1999 que quando divididos por 11
obtemos resto = 5. (FOR)*/

let numeros = []

for(i = 1000; i < 2000; i++){
    if(i % 11 == 5){
        numeros.push(i)
    }
}

console.log(numeros)