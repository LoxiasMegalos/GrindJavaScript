import { Animal } from "./animal";
import { Escalar } from "./escalar";

export class Preguica extends Animal implements Escalar{

    escalar(): string {
        return `Preguiça ${this.nome} subindo em uma arvore`
    }

    emitirSom(): string {
        return `Preguiça ${this.nome} emitindo o som do Sid!`
    }
    
}