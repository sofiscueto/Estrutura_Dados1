import Queue from "./Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Está vazia?", fila.isEmpty)

//inserçoes na fila
fila.enqueue("Sofia")
fila.enqueue("Pedro")
fila.enqueue("Eduarda")
fila.enqueue("Henrique")

console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
proximo = fila.peek()
console.log({proximo})

fila.enqueue("Bianca")
console.log(fila.print())
