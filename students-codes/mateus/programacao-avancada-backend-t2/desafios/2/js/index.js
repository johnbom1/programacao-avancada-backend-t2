//desafio 2
/*
Desafio: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

Desafio: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas.Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

*/

const number1 = 2, number2 = 2;

console.log("Resultado desafio 2:")
console.log(JSON.stringify({
   soma: number1 + number2,
   subtracao: number1 - number2,
   multiplicacao: number1 * number2,
   divisao: number1 / number2
}))