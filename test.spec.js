/**
 * teste unitário -> testa comportamento de unidade(função, metodo, if, retorno de função, chamada de função)
 * teste integrado -> testa comportamento de integração(usecase chama o repositiro, integração de service(isto, é, um envio de email por exemplo, chamada a outra api..)
 * e2e -> teste de integração -> real, com banco e api externas -> request -> controller - usecase - service <- usecase <- controller <- response
 */
const repositoryPokemon = { update (request) { return request } }

describe('example', () => {
  it('should ', () => {
      const createPokemon = {} // criando no banco...
      const requestPokemon = {} // atualizacoes requisitadas
      const expectedPokemon = {} // retorno esperado pos atualizacao

      const resultado = repositoryPokemon.update(requestPokemon) // testa o comportamento

      expect(expectedPokemon).toEqual(resultado) // aqui vc faz as validacoes
  });
});