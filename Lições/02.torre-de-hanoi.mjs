/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from "..lib\Stack.mjs"

// Criando as três torres (pilhas)
let A = new Stack();
let B = new Stack();
let C = new Stack();

// Estado inicial: todos os discos estão na torre B
// Colocando do maior (base) para o menor (topo)
B.push(4);
B.push(3);
B.push(2);
B.push(1);

// Mostrando como começa
console.log("INICIO:");
console.log("A:", A.print()); // vazio
console.log("B:", B.print()); // [4,3,2,1]
console.log("C:", C.print()); // vazio

// Agora vou começar a resolver manualmente
// Objetivo: levar tudo da torre B para a torre A

// 1) mover o disco 1 de B para C
C.push(B.pop());

// 2) mover o disco 2 de B para A
A.push(B.pop());

// 3) mover o disco 1 de C para A (fica em cima do 2)
A.push(C.pop());

// 4) mover o disco 3 de B para C
C.push(B.pop());

// 5) mover o disco 1 de A para B
B.push(A.pop());

// 6) mover o disco 2 de A para C (fica em cima do 3)
C.push(A.pop());

// 7) mover o disco 1 de B para C
C.push(B.pop());

// 8) mover o disco 4 de B para A (maior disco)
A.push(B.pop());

// 9) mover o disco 1 de C para A
A.push(C.pop());

// 10) mover o disco 2 de C para B
B.push(C.pop());

// 11) mover o disco 1 de A para B
B.push(A.pop());

// 12) mover o disco 3 de C para A
A.push(C.pop());

// 13) mover o disco 1 de B para C
C.push(B.pop());

// 14) mover o disco 2 de B para A
A.push(B.pop());

// 15) mover o disco 1 de C para A (finaliza)
A.push(C.pop());

// Estado final esperado
console.log("\nFINAL:");
console.log("A:", A.print()); // [4,3,2,1]
console.log("B:", B.print()); // vazio
console.log("C:", C.print()); // vazio