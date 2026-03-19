/*
    ESTRUTURA DE DADOS: FILA (QUEUE)

    - Fila é uma estrutura linear de acesso restrito.
    - Permite inserção (enqueue) no FINAL.
    - Permite remoção (dequeue) no INÍCIO.
    - Segue o princípio FIFO:
      First In, First Out (primeiro a entrar, primeiro a sair).

    📌 Exemplo real:
    - Fila de banco
    - Fila de impressão
    - Processamento de tarefas
*/

export default class Queue {

    #data; // Vetor privado que armazena os elementos

    constructor() {
        this.#data = [];
    }

    // 🔹 Adiciona um elemento ao final da fila
    enqueue(valor) {
        this.#data.push(valor);
    }

    // 🔹 Remove o elemento do início da fila
    dequeue() {
        if (this.isEmpty) {
            console.log("Fila vazia!");
            return null;
        }
        return this.#data.shift();
    }

    // 🔹 Consulta o primeiro elemento sem remover
    peek() {
        return this.isEmpty ? null : this.#data[0];
    }

    // 🔹 Verifica se a fila está vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // 🔹 Retorna o tamanho da fila
    get size() {
        return this.#data.length;
    }

    // 🔹 Imprime a fila (para depuração)
    print() {
        if (this.isEmpty) {
            return "[ Fila vazia ]";
        }

        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (i > 0) output += ", ";
            output += `(${i}): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}