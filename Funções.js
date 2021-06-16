/*
function media (n1, n2){
    var nota1 = n1; 
    var nota2 = n2;
    var media = (nota1 + nota2) /2 ;
    console.log(media)
}
media(8, 7)

//Return
function media (n1, n2){
     
    var nota1 = n1; 
    var nota2 = n2;
    var media = (nota1 + nota2) /2 
    return media //retornando a função sempre precisar chamar ela igual no exemplo anterior
}
var resultado = media(10, 7)
console.log(resultado)

//Funções 02

//Uma função no JavaScript pode ser uma variável 

function saudacao(){
    
    return "Olá galera";
};

var s = saudacao();

console.log(saudacao);  //Irá imprimir a função porque está sem os parênteses

console.log(saudacao())  //Irá imprimir os comandos da função = "Olá galera

console.log(s())  //irá imprimir os comandos da função pois eu atribui a variável S a função

//Função anônima = (função dentro de uma variável)

var media = function (n1, n2){
     return (n1 + n2) / 2 

}

console.log(media(5,6))

//# Arrow function

var media = (n1, n2) => {
    return (n1 + n2) / 2 

}

var m = media(6, 8)
console.log(m)

*/

