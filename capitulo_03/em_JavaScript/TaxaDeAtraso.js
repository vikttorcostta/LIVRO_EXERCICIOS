/**
 * Questão letra E
 * 
 * Efetuar o cálculo e apresentar o valor de uma prestação de um bem em atraso,
 * utilizando a fórmula PRESTAÇÃO ← VALOR + (VALOR * (TAXA/100) * TEMPO).
 */

let prestacao;
let valor = prompt("Informe o valor: ");
let taxa = prompt("Informe a taxa: ");
let tempo = prompt("Informe o tempo: ");

prestacao = valor + (valor / 100) * tempo;
console.log("Valor da prestação: R$" + prestacao);