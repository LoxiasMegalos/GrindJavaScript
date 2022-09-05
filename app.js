const prompt = require("prompt-sync")()

//Output

console.log("Hello World!")
console.log("Olá Mundo")

//Exemplo de um código em javascript
console.log("***Bem vinde***\n")


// const - constante / let - declarando uma variavel / var - depreciado (raramente utilizado - muito utilizado em desenvolvimento WEB)
let nome = prompt("Digite o seu nome: ")
console.log("Seu nome eh: ",nome)

let idade = Number(prompt("Digite a sua idade: "))
console.log(idade + 10)

let altura = Number(prompt("Digite a sua altura: "))
console.log(nome, " possui uma altura de: ", altura, " metros!")

console.log("Olá, meu nome é ", nome, " tenho ", idade, " anos de idade e possuo ", altura, " metros de altura!")

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos de idade `+
`e eu tenho ${altura} de altura!`)