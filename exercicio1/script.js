let par = prompt("Digite um número par:")

console.log(par % 2)
par = Number(par)

console.log(typeof(par))

/*Toda vez que um número par é inserido o módulo dá como 
resto da divisão 0 confirmando a autenticidade do número par.
Já no caso de números ímpares, o módulo dá como resto da divisão 
1, ou seja, confirma que o número é ímpar.*/