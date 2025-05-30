/**
 
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
  pequeno -> brincar dentro de casa
  médio -> caminhada no quarteirão
  grande -> correr no parque
  qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
  menor que 15 -> "atividade rápida: [atividade]"
  de 15 a 30 -> "tempo ideal: [atividade]"
  acima de 30 -> "hora da diversão: [atividade]

 
 */

const nome = `Pantera`
const porte = `médio`
const tempo = 30


// decidir o tipo de atividade com base no porte
let atividade

switch (porte) {
  case 'pequeno':
    atividade = `brincar dentro de casa`
    break
  case 'médio':
    atividade = `caminhada no quarteirão`
    break 
  case 'grande':
    atividade = `correr no parque`
    break 
  default:
    atividade = `porte inválido`
}

// ajustar a mensagem de acordo com o tempo
// Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
//   menor que 15 -> "atividade rápida: [atividade]"
//   de 15 a 30 -> "tempo ideal: [atividade]"
//   acima de 30 -> "hora da diversão: [atividade]
let mensagem

if (tempo < 15) {
  mensagem = `atividade rápida`
} else if (tempo <= 30) {
  mensagem = `tempo ideal`
} else if (tempo > 30) {
  mensagem = `hora da diversão`
}

console.log(`${ mensagem }: [${ atividade }]`)