
const ContaBancaria = require('./ContaBancaria');

var conta = new ContaBancaria();


conta.VerSaldo();
conta.Depositar(1000);

conta.VerSaldo();
conta.Sacar(1200);
conta.Sacar(800);
conta.VerSaldo();

conta.Sacar(200);
conta.VerSaldo();