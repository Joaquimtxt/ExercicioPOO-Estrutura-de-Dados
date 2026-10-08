const WorkFlow = require("./WorkFlow");

const workflow = new WorkFlow();

workflow.insertAtEnd("Joaquim", "joca@email.com", "Finanças");
workflow.insertAtEnd("João", "joca@email.com", "Engenharia");
workflow.insertAtEnd("Kleber", "klebin@email.com", "TI");

workflow.toStringInfo();

console.table(workflow.toArray());

console.log(workflow.toString());

