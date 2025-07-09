// Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. 
// O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um texto: ', (texto) => {
    const vogais = texto.match(/[aeiou]/g);
    const quantidade = vogais ? vogais.length : 0;
    console.log(`Número de vogais: ${quantidade}`);
    rl.close();
});