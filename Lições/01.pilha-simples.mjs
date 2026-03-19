/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
Estado inicial:
[]

1) push(5)
[5]

2) push(9)
[5, 9]

3) pop() -> remove o 9
[5]

4) push(3)
[5, 3]

5) push(8)
[5, 3, 8]

6) pop() -> remove o 8
[5, 3]

7) pop() -> remove o 3
[5]

8) push(6)
[5, 6]

9) push() -> operação inválida (não insere nenhum valor)
[5, 6]

10) push(2)
[5, 6, 2]

11) pop() -> remove o 2
[5, 6]

12) push(10)
[5, 6, 10]

13) push(1)
[5, 6, 10, 1]

14) pop() -> remove o 1
[5, 6, 10]

15) pop() -> remove o 10
[5, 6]

16) push(15)
[5, 6, 15]

17) pop() -> remove o 15
[5, 6]

18) pop() -> remove o 6
[5]

Resultado final da pilha:
[5]
*/