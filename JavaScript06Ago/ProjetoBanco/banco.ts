import PromptSync from "prompt-sync"
import {ContaCorrente} from "./src/contacorrente"

let prompt = PromptSync()

let nome = prompt("Digite seu nome: ")

let conta1 = new ContaCorrente(123, 999, "Murillo", 100000, 0)
console.log(conta1.toString())

let conta2 = new ContaCorrente(123, 999, "Raissa", 100000, 0)
console.log(conta2.toString())

conta1.transferir(100, conta2)

console.log(conta1.consultarSaldo())
console.log(conta2.consultarSaldo())
