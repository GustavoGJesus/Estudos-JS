// CONST LET VAR, qual a diferença ?

//A variável pode ser reatribuida, variavel global 
var numero1 = 4; 
console.log(numero1)

//LET e CONST tem um escopo  local, ou seja, se ele for declarado dentro de uma função ele só será definido la dentro, só conseguimos enxergar eles dentro do bloco onde foram declarados
let numero2 = 5; //variavel local
console.log(numero2)

//Ele é uma constante, ou seja, ele só recebe um valor uma vez, não pode ser reatribuida
const numero3 = 6; //variavel local e não pode ser reatribuida
//Ele não pode ser reatribuido, mas pode receber elementos, exemplo:
const a = [2];
a.push(3)
console.log(a)

