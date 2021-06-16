//Primeira maneira para criar um objeto
 /*
 var a = {nome: "Gustavo",
          sobrenome: "Gomes"};

console.log(a)
*/

//Segunda maneira para criar um objeto, objeto criado dentro de uma função
/*
function obj(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome};
}

var nome = obj("Gustavo", "Gomes")
console.log(nome)
*/

//Terceira maneira para criar um objeto
/*
function obj(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var a = new obj("Gustavo", "Gomes")
console.log(a)
*/