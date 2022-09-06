/*

Conta Banco
    Atributos -  agencia, conta, titular, saldo
    Métodos - sacar, depositar, verSaldo

Conta Corrente
    Atributos - limite
    Métodos - alterarLimite

*/

export abstract class ContaBanco {

    protected agencia: number
    protected conta: number
    protected titular: string
    protected saldo: number

    constructor (agencia: number, conta: number, titular:string, saldo: number){
        this.agencia = agencia
        this.conta = conta
        this.titular = titular
        this.saldo = saldo
    }   

    toString(){
        return `Agencia: ${this.agencia} | Conta: ${this.conta} | Titular: ${this.titular} | Saldo: ${this.saldo}`
    }

    abstract sacar(valor: number): void

    abstract depositar(valor: number): void

    consultarSaldo(){
        return `Saldo da conta R$${this.saldo}`
    }

    transferir(valor:number ,conta:ContaBanco){
        this.sacar(valor)
        conta.depositar(valor)
    }

}



