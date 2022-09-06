/* projeto de um banco em javascript */

class Teste{

    public nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    dizOi(){
        console.log(`Olá ${this.nome}`)
    }

}

let x = new Teste("Murillo")

x.dizOi()