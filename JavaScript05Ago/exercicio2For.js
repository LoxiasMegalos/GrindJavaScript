//Exercicio de laços e estruturas de seleção utilizando JavaScript
//Utilizando funções no programa


/*Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)*/

const prompt = require('prompt-sync')()

let quantidadePares = 0
let quantidadeImpares = 0

for(i = 1; i <= 10; i++){
    let numero = Number(prompt(`Informe o ${i}º numero: `))
    
    if(numero % 2 == 0){
        quantidadePares += 1
        continue
    }

    quantidadeImpares += 1
}

console.log(`Foram digitados ${quantidadePares} numeros pares`)
console.log(`Foram digitados ${quantidadeImpares} numeros ímpares`)