
class ContaBancaria {
   #saldo //Atributo privado

    constructor(){
        this.#saldo = 0;
    }

    Depositar = (valor) =>{
     if(valor > 0){
     this.#saldo += valor;
     console.log(`O valor em R$${valor} foi depositado!`);
     }
     else{
        console.log(`O valor depositado tem que ser maior que zero`)
     }
    }

    Sacar = (valor) =>{
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
             console.log(`O valor em R$${valor} foi sacado!`);
        }
        else{
            console.log(`Saldo Insuficiente para efetuar o saque`);
        }
    }

    VerSaldo = () =>{
        console.log(`Saldo Atual: ${this.#saldo}`);
    }
}

module.exports = ContaBancaria;