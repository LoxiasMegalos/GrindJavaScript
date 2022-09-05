const prompt = require('prompt-sync')()

let a = Number(prompt("Informe um numero: "))

if(a < 0)
    console.log(`Número ${a} é negativo!`)
else if(a == 0)
    console.log(`Digitou número zero!`)
else
    console.log(`${a} é positivo!`)

console.log("Fim do programa!")