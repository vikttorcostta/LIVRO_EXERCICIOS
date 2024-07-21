/** 
 * Questão letra A 
 * da lista de exercícios
 * 
 * Ler uma temperatura em graus Celsius e apresenta-la convertida em 
 * graus Fahrenheit. A formula de conversão é F <- C * 9/5 +32, sendo F 
 * a temperatura em Fahrenheit e C a temperatura em Celsius
 */

let F;
let C = prompt("Informe a temperatura em Celsius: ");

F = C * 9 / 5 + 32;
console.log("Graus Fahrenheit: " + F);

