/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from "..lib\Queue.mjs";

// 1) Criando a fila do banco
let filaBanco = new Queue();

// Inserindo os clientes na ordem de chegada
filaBanco.enqueue(101);
filaBanco.enqueue(102);
filaBanco.enqueue(103);
filaBanco.enqueue(104);
filaBanco.enqueue(105);

// 2) Imprimindo a fila antes do atendimento
console.log("Fila inicial:");
console.log(filaBanco.print());

// 3) Atendendo o primeiro cliente (FIFO → primeiro que entra, primeiro sai)
let atendido = filaBanco.dequeue();
console.log("\nCliente atendido:", atendido);

// 4) Imprimindo a fila após remover o primeiro cliente
console.log("\nFila após atendimento:");
console.log(filaBanco.print());

// 5) Novos clientes chegando na fila
filaBanco.enqueue(106);
filaBanco.enqueue(107);

// 6) Imprimindo a fila após novas entradas
console.log("\nFila após novos clientes:");
console.log(filaBanco.print());

// 7) Verificando quem é o próximo da fila (sem remover)
let proximo = filaBanco.peek();
console.log("\nPróximo cliente a ser atendido:", proximo);

// 8) Atendendo o próximo cliente
filaBanco.dequeue();

console.log("\nFila final:");
console.log(filaBanco.print());