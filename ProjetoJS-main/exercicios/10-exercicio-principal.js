/**

  Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

 */

import { CATS, DOGS } from './10-exercicio-dados.js'
import { entregarPetiscos } from './10-exercicio-funcao.js'

entregarPetiscos(DOGS)
entregarPetiscos(CATS)

