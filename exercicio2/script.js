let n1 = Number(prompt("Digite um número: "))
console.log(n1)
let n2 = Number(prompt("Digite outro número: "))
console.log(n2)

console.log("O primeiro número é maior que o segundo?", n1>n2)
console.log("O primeiro número é igual ao segundo?", n1===n2)
console.log("O primeiro número é divisível pelo segundo?", n1 % n2 === 0)
console.log("O segundo número é divisível pelo primeiro?", n2 % n1 === 0)