/** 
 * Questão letra B
 * da lista de exercícios
 * 
 * Ler uma temperatura em graus Fahrenheit e apresenta-la convertida em 
 * graus Celsius. A formula de conversão é C <- ((F - 32) * 5) / 9, sendo F 
 * a temperatura em Fahrenheit e C a temperatura em Celsius
 */

let C;
let F = prompt("Informe a temperatura em Fahrenheit: ");

C = ((F - 32) * 5) / 9;
console.log("Graus Celsius: " + C);
