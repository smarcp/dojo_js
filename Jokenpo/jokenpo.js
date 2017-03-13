const jogadas = {
  "tesoura" : { vence : ["papel", "lagarto"]},
  "papel"   : { vence : ["pedra", "spock"]},
  "pedra"   : { vence : ["tesoura", "lagarto"]},
  "spock"   : { vence : ["pedra", "tesoura"]},
  "lagarto" : { vence : ["spock", "papel"]}
}

const checkExists = (value, list) =>  {
    return list.some((x) => x == value)
}

const jokenpo = function (jogador1, jogador2) {

  if(!jogador1 || !jogador2)
    throw new Error("jogadas não informadas");

  for(jogada of arguments) {
    
    if (!jogadas[jogada]) 
      throw new Error("jogada " + jogada + " invalida")
  }

  if (jogador1 === jogador2)
    return "empate"

  if (checkExists(jogador2, jogadas[jogador1].vence))
    return jogador1 + ' win!';
  else 
    return jogador2 + ' win!';
}

module.exports = jokenpo;