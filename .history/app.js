// problema: Verifique se o número é positivo,negativo ou zero.
// Descrição: Escreva um programa que solicite ao usuário um número e, em seguida,informe se o número é positivo,negativo ou zero.

const question0 = document.getElementById(question0);

const answer = Number(prompt("Digite um número"));

if (answer > 0){
    question0.innerHTML = "O número $(answer) é positivo";
} else if (answer < 0) {
    question0.innerHTML = "O número $(answer) é negativo";
} else {
    question0.innerHTML = "O número é zero";
}

const question1 = document.getElementById("qustion1");

const sideA = Number(prompt("digite o primeiro lado"));
const sideB = Number(prompt("digite o segundo lado"));
const sideC = Number(prompt("digite o terceiro lado"));

if (sideA == sideB && sideA == sideC) {
    question1.innerHTML = "O triângulo é equilatero";
} else if (sideA == sideB && sideA != sideC || sideA == sideC && sideA != sideB || sideB == sideC && 
sideB != sideA) {
    question1.innerHTML = "O triângulo é escaleno"
}

const question2 = document.getElementById(question2);
const answer2 = Number(prompt("Digite um ano"));

if(answer2 % 4 == 0 || answer2 % 100 == 0 && answer2 & 400 != 0) {
    question2.innerHTML = "O ano ${answer2} é bissexto";
} else {
    question2.innerHTML = "O ano ${answer2} não é bissexto";
}

const quetion3 = document.getElementById("qustion3");

const Number1 = Number(prompt("digite o primeiro número"));
const Number2 = Number(prompt("digite o segundo número"));
const Number3 = Number(prompt("digite o terceiro número"));

if (Number1 > Number2 && Number1 > Number3) {
    question3.innerHTML ='O número ${Number1} é o maior entre os três.'
} else if (number2 > Number1 && number2 > Number3) {
    question3.innerHTML = 'O número $(number2) é o maior entre os três.'
} else {
    question3.innerHTML = 'O número $(number3) é o maior entre os três.' 
}

const question4 = document.getElementById("question4");

const answer4 = Number(prompt("Digite um número."));

if (answer % 2 == 0) {
 question4.innerHTML = 'O número $(answer4) é par.';
 } else {
    question4.innerHTML = 'O número $(answer4) é ímpar.';
 }

answer4 % 2 == 0 ? 'O número $(answer) é par' : 'O número $(answer) é impar';

function mediaDaNota(nota0, nota1, nota2, nota3){

    //const = tipo de variavel, é imutável
    //mediaFinal = nome da variável em camelcase
    //o que ela faz?
    //soma das variáveis e dividide pela quantidade de variáveis
    
    const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4
    
    //if = condição
    //(mediaFinal >=7) = a condição ta verificando se a variavel 'mediaFinal' é maior ou igual a 7
    
    //else= se nâo atender a nenhuma condição anterior ela entra no else
    //return= informe a resposta final
    
    if (mediaFinal >=7) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    
    //return mediaFinal >=7 ? "Aprovado" : "Reprovado";
    }
    
    const nota0 = Number(prompt("Digite uma nota"));
    const nota1 = Number(prompt("Digite a segunda"));
    const nota2 = Number(prompt("Digite a terceira nota"));
    const nota3 = Number(prompt("Digite a quarta nota"));
    
    document.write(mediaDaNota(nota0, nota1, nota2, nota3));
    