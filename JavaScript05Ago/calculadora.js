//calculadora com funções javascript

const prompt = require('prompt-sync')()
let numeroDaTela = 0

while(true){

    mostraNumeroDaTela(numeroDaTela)

    console.log("**********************")
    console.log("Calculadora")
    console.log("(1) - Soma")
    console.log("(2) - Subtração")
    console.log("(3) - Multiplicação")
    console.log("(4) - Divisão")
    console.log("(5) - Limpar tela")
    console.log("(6) - Mostra novo numero na tela")
    console.log("(0) - Sair")
    console.log("**********************")

    let opcao = Number(prompt("Digite a sua escolha: "))

    switch(opcao){
        case 1:
            console.log("Somando")
            numeroDaTela = funcaoSoma(numeroDaTela)
            
            break
        case 2:
            console.log("Subtraindo")
            numeroDaTela = funcaoSubtracao(numeroDaTela)
            
            break
        case 3: 
            console.log("Multiplicando")
            numeroDaTela = funcaoMultiplicacao(numeroDaTela)
           
            break
        case 4: 
            console.log("Divisão")
            numeroDaTela = funcaoDivisao(numeroDaTela)
            
            break
        case 5:
            console.log("Limpando tela")
            console.log(`${numeroDaTela} -> 0`)
            numeroDaTela = 0
            break
        case 6:
            console.log("Alterando numero na tela")
            numeroDaTela = novoNumeroNaTela()
            break
        case 0:
            console.log("Obrigado por utilizar")
            break
        default:
            console.log("Opção Inválida")
            break
    }

    if(opcao == 0){
        break
    }

}

function funcaoSoma(numero){
    
    let textoCalculadora = `${numero} + `

    console.log(textoCalculadora)

    let b = Number(prompt("Informe o número que irá somar: "))
    textoCalculadora += `${b} = ${numero+b}`
    console.log(textoCalculadora)

    let resultado = numero + b

    return resultado
}

function funcaoSubtracao(numero){
    
    let textoCalculadora = `${numero} - `

    console.log(textoCalculadora)

    let b = Number(prompt("Informe o numero que irá subtrair: "))
    textoCalculadora += `${b} = ${numero-b}`
    console.log(textoCalculadora)

    let resultado = numero - b

    return resultado
}

function funcaoMultiplicacao(numero){
   
    let textoCalculadora = `${numero} * `

    console.log(textoCalculadora)

    let b = Number(prompt("Informe o numero que irá multiplicar: "))
    textoCalculadora += `${b} = ${numero*b}`
    console.log(textoCalculadora)

    let resultado = numero * b

    return resultado
}

function funcaoDivisao(numero){
    
    let textoCalculadora = `${numero} / `

    console.log(textoCalculadora)

    let b = Number(prompt("Informe o numero que irá dividir: "))
    textoCalculadora += `${b} = ${numero/b}`
    console.log(textoCalculadora)

    let resultado = a / numero

    return resultado
}

function mostraNumeroDaTela(numero){
    console.log(`Número da tela = ${numero}`)
}

function novoNumeroNaTela(){
    return Number(prompt("Informe o novo numero da tela: "))
}