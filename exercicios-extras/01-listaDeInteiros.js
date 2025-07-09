//Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
// Exemplo de uso:
// const resultado = filtrarInteiros([1, 'a', 2, 'b', 3]);


const readline = require('readline');

function filtrarInteiros(lista) {
    return lista.filter(item => Number.isInteger(item));
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma lista de valores separados por vírgula: ', (input) => {
    const lista = input.split(',').map(item => {
        const num = Number(item.trim());
        return isNaN(num) ? item.trim() : num;
    });
    const resultado = filtrarInteiros(lista);
    console.log(resultado);
    rl.close();
});