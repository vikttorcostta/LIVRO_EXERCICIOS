/** 
 * Questão letra C
 * da lista de exercícios
 * Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a formula VOLUME <- PI * RAIO ** 2 * ALTURA
 */


let volume;
let raio = prompt("Informe o valor do raio: ");
let altura = prompt("Informe o valor da altura: ");
const pi = 3.14159;

volume = pi * Math.pow(raio, 2) * altura;
console.log("O volume do cilindro é: " + volume);