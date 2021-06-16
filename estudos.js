//Operador ternário (Parecido com IF e ELSE, usado para verificação simples)

//Exemplo 1:

//var idade = 17

//idade >= 18 ? console.log('Pode comprar a bebida') :  console.log('Não pode');

// ? Se atender o requisito ele faz oq ?

// : ⇒ Negação 

//**Exemplo 2:**

//Outra forma de fazer

//var pode = idade >= 18 ? true :  false;

//console.log(pode)

//Funções (Apelido para um bloco de comando)

/*function nome da função (){ #**Declarando a função**
      comandos que você deseja executar

}

nome da função() **#chamando a função*/

//EXEMPLO

/*function media (n1, n2){
     var nota1 = n1; 

var nota2 = n2;

var media (nota1 + nota2) /2 

console.log(media)*/

//}

/*media(8, 7)

resultado = 7.5

**EXEMPLO**

function media (n1, n2){
     var nota1 = n1; 

var nota2 = n2;

var media = (nota1 + nota2) /2 */

//return media //#retornando a função sempre precisar chamar ela igual no exemplo anterior**

//}

//var resultado1 = media(8, 7)

//console.log(resultado1)

//# Função 2

//Uma função no JavaScript pode ser uma variável 

//function saudacao(){

//return "Olá galera";

//};

//var s = saudacao();

//console.log(saudacao);  //**#Irá imprimir a função porque está sem os parênteses**

//console.log(saudacao())  //**#Irá imprimir os comandos da função = "Olá galera"**

//console =.log(s())  //**#irá imprimir os comandos da função pois eu atribui a variável S a função**

//# Função anônima (função dentro de uma variável)

/*var media = function (n1, n2){
     return (n1 + n2) / 2 

}*/

//console.log(media(5,6))

//# Arrow function

//var media = (n1, n2) ⇒ {

//return (n1 + n2) / 2 

//}

//var m = media(6, 8)

//console.log(m)

/*# Objetos {} ⇒ abre e fecha chaves, diferença de objeto para array e que no objeto podemos criar chaves para acessar algum elemento*/

//var aluno = {nome: "Gustavo" ,   nota1: 7.5,   notas2: [4.0, 2.0, 3.0]#colocando array } #chave (propriedade): valor

//console.log(aluno.nome) //⇒ acessando elemento 

//console.log(aluno["nome"]) //⇒ outra forma de acessar elemento 

//console.log(alunos.notas2[1]) //⇒ Acessando o array 

//aluno.matricula = 123456 //⇒ inserindo nova propriedade

//aluno ["sobrenome"] = "Gomes" //⇒ inserindo nova propriedade

//console.log(aluno)

//## Objetos {} part 2 //⇒ Outra forma de criar objeto

//var aluno = new Object (); 

//aluno.nome = "Gustavo" //⇒ Adicionando propriedades

//aluno.notas = [8 , 9]

//console.log()

 

//# Objetos -métodos ⇒ Um objeto pode ter funções

var calcMedia (n1, n2) ⇒{
    return (n1 + n2) /  2
}

var aluno = new Object();

aluno.nome = "Gustavo"

aluno.notas = [10, 9]

média :

}

}

console.log(aluno.nome)

console.log(aluno.media(aluno.notas[0], aluno.notas[1])) ⇒ pegando as notas do objeto aluno