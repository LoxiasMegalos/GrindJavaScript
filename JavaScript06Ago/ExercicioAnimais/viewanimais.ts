import PromptSync from "prompt-sync";
import { Animal } from "./src/animal";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";
import { Corrida } from "./src/correr";
import { Escalar } from "./src/escalar";

let animais = new Array<Animal>();

const prompt = PromptSync()

let animal:Animal;

while(true){
    try{
        while(true){
            console.log()
            console.log("Bem vindo ao zoológico")
            console.log("(1) - Adicione Cachorro")
            console.log("(2) - Adicione Cavalo")
            console.log("(3) - Adicione Preguiça")
            console.log("(4) - Listar animais")
            console.log("(5) - Emitir Som dos animais")
            console.log("(6) - Realizar ações dos animais")
            console.log("(7) - Remover animais do zoológico")
            console.log("(0) - Sair")
            console.log()

            let opcao = Number(prompt("Insira a sua opção: "))

            switch(opcao){
                case 1:{
                    let nome = insereNome()
                    let idade = insereIdade()
                    animal = new Cachorro(nome, idade)
                    animais.push(animal)
                    break
                }

                case 2:{
                    let nome = insereNome()
                    let idade = insereIdade()
                    animal = new Cavalo(nome, idade)
                    animais.push(animal)
                    break
                }

                case 3:{
                    let nome = insereNome()
                    let idade = insereIdade()
                    animal = new Preguica(nome, idade)
                    animais.push(animal)
                    break
                }

                case 4:{
                    for(let i = 0; i<animais.length; i++){
                        console.log(animais[i].toString())
                    }
                    break
                }

                case 5:{
                    for(let i = 0; i<animais.length; i++){
                        console.log(animais[i].emitirSom())
                    }
                    break
                }

                case 6:{
                    for(let i = 0; i<animais.length; i++){
                        if(animais[i] instanceof Cachorro){
                            let x:Cachorro = <Cachorro>animais[i]
                            console.log(x.correr())
                        } else if (animais[i] instanceof Cavalo){
                            let x:Cavalo = <Cavalo>animais[i]
                            console.log(x.correr())
                        } else{
                            let x:Preguica = <Preguica>animais[i]
                            console.log(x.escalar())
                        }
                    }
                    break
                }

                case 7:{
                    let animalRemover = insereNome()
                    for(let i = 0; i<animais.length; i++){
                        if(animais[i].getNome() == animalRemover){
                            animais.splice(i, 1)
                        }
                    }
                    break
                }

                case 0:{
                    console.log("Obrigado por utilizar!")
                    break
                }
            }

            if(opcao == 0){
                break
            }
        }
    } catch(e){
        console.log("Erro encontrado no programa")
    }
    break
}

function insereIdade() {
    return Number(prompt("Informe a idade do bichinho: "))
}

function insereNome() {
    return prompt("Informe o nome do bichinho: ")
}

