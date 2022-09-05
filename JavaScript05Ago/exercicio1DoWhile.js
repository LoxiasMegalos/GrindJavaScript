/*
Crie um programa que leia um número do teclado até que encontre um
número igual a zero. No final, mostre a soma dos números
digitados.(DO...WHILE)
*/

const prompt = require('prompt-sync')()

let soma = 0
let numero
do{
    numero = Number(prompt("Digite um numero: "))
    soma += numero
}while(numero != 0)

console.log(`Soma total dos numeros digitados é: ${soma}`)