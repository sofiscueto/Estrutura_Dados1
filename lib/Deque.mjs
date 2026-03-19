export default class Deque{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    //metodo para inserir dados no inicio da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }

    //metodo para inserir dados no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }

    //metodo para remover dados no inicio da estrutura
    removeFron(){
        return this.#data.shift()
    }

    //metodo para remover no final da estrutura
    removeBack(){
        return this.#data.pop()
    }

    //metodo para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0]
    }

    //metodo para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Sim, está vazia": "Não!"
    }

    //Metodo para imprimir a fila (efeitos de depuração)
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i + 1})º: ${this.#data[i]}`
        }
        return output + " ]"
    }
}