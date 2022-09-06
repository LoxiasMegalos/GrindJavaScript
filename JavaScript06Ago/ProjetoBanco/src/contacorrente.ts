import { ContaBanco } from "./contabanco";

export class ContaCorrente extends ContaBanco {

    private limite = 0

    constructor (agencia: number, conta: number, titular:string, saldo: number, limite: number){
        super(agencia, conta, titular, saldo)
        this.limite = limite
    }   

    sacar(valor: number): void {

        if(valor <= this.saldo + this.limite && valor > 0){
            this.saldo -= valor
            return
        }
        throw new Error("Valor de saque invalido, por favor consulte o seu saldo!");
    }

    depositar(valor: number): void {
       if(valor > 0 ){
            this.saldo += valor
            return
        }
        throw new Error("Não é possível depositar valores negativos!")
    }

    alterarLimite(valor: number){
        if(valor > 0){
            this.limite = valor
            return
        }
        throw new Error("Não é possível possuir um limite negativo")
    }

    consultaLimite(){
        return this.limite
    }

}