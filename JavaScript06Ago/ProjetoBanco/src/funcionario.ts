import { Pessoa } from "./pessoa";

export class Funcionario implements Pessoa{
    
    nome: String;
    idade: number;
    cpf: string;

    constructor(nome: string, idade: number, cpf: string){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    andar(): string {
        return `${this.nome} andando!`
    }

    correr(): string {
        return `${this.nome} correndo!`
    }
    
}