const jokenpo = require("../jokenpo.js");

const papel   = "papel",
      tesoura = "tesoura",
      pedra   = "pedra",
      spock   = "spock",
      lagarto = "lagarto"

describe("Jokenpo Tests", () => {
  
  it("Papel cobre pedra", () => {
    expect(jokenpo(papel, pedra)).toEqual("papel win!");
  });

  it("Papel reprova o Spock", () => {
    expect(jokenpo(papel, spock)).toEqual("papel win!");
  });

  it("Tesoura ganha de papel", () => {
    expect(jokenpo(tesoura, papel)).toEqual("tesoura win!")
  });

  it("Tesoura mata o lagarto", () => {
    expect(jokenpo(tesoura, lagarto)).toEqual("tesoura win!")
  });

  it("Pedra ganha de tesoura", () => {
    expect(jokenpo(tesoura, pedra)).toEqual("pedra win!")
  });

  it("Pedra esmaga lagarto", () => {
    expect(jokenpo(lagarto, pedra)).toEqual("pedra win!")
  });

  it("Spock vaporiza pedra", () => {
    expect(jokenpo(spock, pedra)).toEqual("spock win!")
  });

  it("Spock quebra tesoura", () => {
    expect(jokenpo(spock, tesoura)).toEqual("spock win!")
  });

  it("Lagarto envenena Spock", () => {
    expect(jokenpo(spock, lagarto)).toEqual("lagarto win!")
  });

  it("Lagarto come papel", () => {
    expect(jokenpo(papel, lagarto)).toEqual("lagarto win!")
  });

  it("Papel empata com papel", () => {
    expect(jokenpo(papel, papel)).toEqual("empate")
  });

});

describe("Jogadas invalidas", () =>  {

  it("Jogada não informada", () => {  
    expect(jokenpo).toThrowError("jogadas não informadas")
  });

  it("Jogador 1 invalido", () => {
    expect(() => jokenpo("jailson", papel))
      .toThrowError("jogada jailson invalida")
  });

  it("Jogador 2 invalido", () =>{
    expect(() => jokenpo(papel, "mustela"))
      .toThrowError("jogada mustela invalida")
  })
});