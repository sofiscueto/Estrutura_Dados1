
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

export default class LinkedList {
    #head; // Início da lista (cabeça)
    #tail; // Final da lista (cauda)
    #count; // Quantidade de nodos da lista

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    //getter que retorna se a lista encadeada está vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    //getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    } 

    //Método para inserir em qualquer posição
    insert(pos, val){
        //cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        //1º caso: a lista está vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }

        //2º caso: inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = insert
        }

        //3º caso: inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4º caso: posição itermediaria
        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before = before.next
            }
            let after = before.next
            inserted.next = after
            before.next = inserted
        }
        this.#count++
    }

    //metodo de inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0, val)
    }

    //metodo de inserção na ultima posição (atalho)
    insertTail(val){
        this.insert(this.#count, val)
    }

    //metodo para remoção de um nodo na lista
    remove(pos){
        //1º caso: a lista está vazia ou a posição informada está fora
        if (this.isEmpty || pos < 0 || pos< this.#count -1){
            return undefined
        }

        let removed

        //2º caso: remoção do inicio da lista
        if(pos === 0){
            removed = this.#head

            this.#head = this.#head.next

            if(this.#count === 1){
                this.#tail = null
            }
        }

        //3º caso: remolção de nodo intermediário ou final
        else{
            let before = this.#head

            for(let i = 1; i < pos; i++){
                before = before.next
            }

            removed = before.next
            let after = removed.next

            before.next = after

            if(pos === this.#count -1){
                this.#tail = before
            }
        }

        this.#count--;
        return removed.data
    }

    removeHead(){
        return this.remove(0)
    }

    removeTail(){
        return this.remove(this.#count - 1)
    }

    indexOf(val){
        //1º caso: lista vazia
        if(this.isEmpty){
            return -1
        }

        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            if(node.data === val){
                return i
            }
            node = node.next
        }

        return -1
    }
}