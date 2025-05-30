export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  let consumoTotal = 0;
  let kg = 0;

  while (kg < Math.floor(peso)) {
    consumoTotal += 300;
    kg++;
  }

  const fracao = peso - Math.floor(peso);
  consumoTotal += fracao * 300;

  return consumoTotal;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'passear na rua',
    grande: 'correr e passear na rua'
  };
  return atividades[porte];
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}
