import { Animal } from "./animal";
import { Corrida }from "./correr";

export class Cavalo extends Animal implements Corrida{

    correr(): string {
        return `Cavalo ${this.nome} trotando!`
    }

    emitirSom(): string {
        return `Cavalo ${this.nome} relinchando!`
    }
    
}