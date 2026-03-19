/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

    import Queue from "..lib\Queue.mjs";

// 1) Criando a fila do aeroporto
let filaAeroporto = new Queue();

// Inserindo os passageiros na ordem de check-in
filaAeroporto.enqueue("Passageiro A");
filaAeroporto.enqueue("Passageiro B");
filaAeroporto.enqueue("Passageiro C");
filaAeroporto.enqueue("Passageiro D");
filaAeroporto.enqueue("Passageiro E");

// 2) Imprimindo a fila antes do embarque
console.log("Fila inicial:");
console.log(filaAeroporto.print());

// 3) Chamando o primeiro passageiro (FIFO)
let embarcado = filaAeroporto.dequeue();
console.log("\nPassageiro embarcado:", embarcado);

// 4) Imprimindo a fila após remoção
console.log("\nFila após embarque:");
console.log(filaAeroporto.print());

// 5) Novos passageiros entrando na fila
filaAeroporto.enqueue("Passageiro F");
filaAeroporto.enqueue("Passageiro G");
filaAeroporto.enqueue("Passageiro H");

// 6) Imprimindo a fila atualizada
console.log("\nFila após novos passageiros:");
console.log(filaAeroporto.print());

// 7) Verificando quem é o próximo (sem remover)
let proximo = filaAeroporto.peek();
console.log("\nPróximo passageiro a embarcar:", proximo);

// 8) Chamando esse passageiro
filaAeroporto.dequeue();

// Imprimindo fila final
console.log("\nFila final:");
console.log(filaAeroporto.print());