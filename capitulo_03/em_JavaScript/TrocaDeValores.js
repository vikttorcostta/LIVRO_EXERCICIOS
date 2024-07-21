/**
 * Questão letra F
 * 
 * Ler dois valores para as variáveis A e B e efetuar a troca dos valores de forma que a variável
 * A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. 
 * Apresentar os valores após a efetivação do processamento da troca. 
 */

let A = 10;
let B = 20;
let temp = 0;

temp = A;
A = B;
B = temp;

console.log("Troca de A: " + A);
console.log("Troca de B: " + B);