//CONSTRUTORES
function criarAluno (name, n1, n2){
     
    return {nome: name,
           nota1: n1,
           nota2: n2,
           media: function (){
                return (this.nota1 + this.nota2) / 2;
           }
    }
   
}

var turma = [
    criarAluno("Gustavo", 10, 9),
    criarAluno("Carlos", 8, 7)
]

var aluno = turma[1]

turma.forEach(function(elemento){ //varrendo o array e printando na tela, o que passa no forEach é uma função
    console.log(elemento)
})