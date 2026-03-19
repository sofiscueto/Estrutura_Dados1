/*
    ESTRUTURA DE DADOS: PILHA (STACK)

    - Pilha é uma estrutura linear de acesso restrito.
    - Permite inserção (push) e remoção (pop) no TOPO.
    - Segue o princípio LIFO:
      Last In, First Out (último a entrar, primeiro a sair).

    📌 Exemplo real:
    - Pilha de pratos
    - Histórico de navegação (voltar página)
    - Desfazer (CTRL + Z)
*/

export default class Stack {

    #data; // Vetor privado que armazena os elementos

    constructor() {
        this.#data = [];
    }

    // 🔹 Adiciona um elemento ao topo da pilha
    push(valor) {
        this.#data.push(valor);
    }

    // 🔹 Remove o elemento do topo da pilha
    pop() {
        if (this.isEmpty) {
            console.log("Pilha vazia!");
            return null;
        }
        return this.#data.pop();
    }

    // 🔹 Consulta o topo sem remover
    peek() {
        return this.isEmpty ? null : this.#data[this.#data.length - 1];
    }

    // 🔹 Verifica se está vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // 🔹 Retorna o tamanho da pilha
    get size() {
        return this.#data.length;
    }

    // 🔹 Imprime a pilha (para depuração)
    print() {
        if (this.isEmpty) {
            return "[ Pilha vazia ]";
        }

        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (i > 0) output += ", ";
            output += `(${i}): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}