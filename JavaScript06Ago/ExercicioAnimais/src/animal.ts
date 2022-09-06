
export abstract class Animal{

    protected nome: string
    protected idade: number

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    toString(){
        return `Nome: ${this.nome}, idade: ${this.idade}`
    }

    abstract emitirSom(): string

    getNome(){
        return this.nome;
    }

}