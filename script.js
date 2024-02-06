
//1
var dia = true;

if (dia) {
    console.log('Está claro'); 
} else {
    console.log('Está de noite'); 
}



//2
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}



//3
function exibirMensagem() {
    console.log("Esta é uma mensagem de exemplo.");
}

exibirMensagem();



//4
function exibirNome(nome) {
    console.log("Olá, " + nome + "!");
}

exibirNome("Usuário");



//5
function exibirPerfil(nome, idade, estiloMusical) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo Musical Preferido: " + estiloMusical);
}

exibirPerfil("Enrico", 25, "Eclético");



//6
function exibirPreferencias(filme, musica) {
    console.log("Filme Preferido: " + filme);
    console.log("Música Preferida: " + musica);
}

exibirPreferencias("O Senhor dos Anéis", "Bohemian Rhapsody");



//7
function triploDoNumero(numero) {
    return numero * 3;
}

var resultado = triploDoNumero(5); 
console.log("O triplo de 5 é:", resultado);



//8
function verificarBooleano(valor) {
    if (valor === true) {
        return "A variável é verdadeira (true).";
    } else if (valor === false) {
        return "A variável é falsa (false).";
    } else {
        return "A variável não é um booleano.";
    }
}

console.log(verificarBooleano(true)); 
console.log(verificarBooleano(false));
console.log(verificarBooleano(10));



//9,10,11,12,13,14,15
var meuArray = ["item1", "item2", "item3", "item4", "item5"];

meuArray.unshift("item1");

meuArray.pop();

meuArray.push("item4", "item5");

meuArray.shift();

console.log(meuArray);



//14
let nome = ["João", "Maria", "Jose", "Pedro"];

nome.splice(2, 0, "Ana");

console.log(nome);



//15
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);