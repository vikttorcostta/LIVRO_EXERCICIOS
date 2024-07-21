/**
 * Questão letra D
 * da lista de exercícios
 * 
 * Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 quilômetros por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (variável TEMPO) e a velocidade média (variável VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTÂNCIA ← TEMPO * VELOCIDADE. A partir do valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS ← DISTÂNCIA / 12. O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.
 */

let distancia;
let litros_usados;
const litros = 12;
let tempo = prompt("Informe o tempo que será gasto: ");
let velocidade = prompt("Informe a velocidade media: ");

distancia = tempo * velocidade;
litros_usados = distancia / litros;

console.log("Velocidade média: " + velocidade);
console.log("Tempo gasto: " + tempo);
console.log("Distância percorrida: " + distancia);
console.log("Litros gastos: " + litros_usados);
