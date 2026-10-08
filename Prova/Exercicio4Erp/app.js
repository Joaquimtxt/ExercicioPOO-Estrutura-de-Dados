const Erp = require("./Erp");

const erp = new Erp();

erp.append("Ação 1");
erp.append("Ação 2");
erp.append("Ação 3");

console.log(erp.toString());

erp.removeLast();

console.log(erp.toString());
console.log(erp.toTable());

erp.redo(0);
console.log(erp.toString());

erp.removeLast();

console.log(erp.toString());
console.log(erp.toTable());

erp.removerDefinitivamente(0);

console.log(erp.toString());
console.log(erp.toTable());

