import { Animal } from "./animal";
import { Corrida }from "./correr";

export class Cachorro extends Animal implements Corrida{

    correr(): string {
        return `Cachorro ${this.nome} correndo com a lingua pra fora!`
    }

    emitirSom(): string {
        return `${this.nome} Latindo como um cachorro!`
    }
    
}