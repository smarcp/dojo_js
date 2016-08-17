var unidades = [{valor : 0, extenso : 'zero'},
                {valor : 1, extenso : 'um'}, 
                {valor : 2, extenso : 'dois'},
                {valor : 3, extenso : 'três'},
                {valor : 4, extenso : 'quatro'},
                {valor : 5, extenso : 'cinco'},
                {valor : 6, extenso : 'seis'},
                {valor : 7, extenso : 'sete'},
                {valor : 8, extenso : 'oito'},
                {valor : 9, extenso : 'nove'},
                {valor : 10, extenso : 'dez'},
                {valor : 11, extenso : 'onze'},
                {valor : 12, extenso : 'doze'},
                {valor : 13, extenso : 'treze'},
                {valor : 14, extenso : 'quatorze'},
                {valor : 15, extenso : 'quinze'},
                {valor : 16, extenso : 'dezesseis'},
                {valor : 17, extenso : 'dezessete'},
                {valor : 18, extenso : 'dezoito'},
                {valor : 19, extenso : 'dezenove'},
                {valor : 20, extenso : 'vinte'},                
                {valor : 30, extenso : 'trinta'},
                {valor : 40, extenso : 'quarenta'},
                {valor : 50, extenso : 'cinquenta'},
                {valor : 60, extenso : 'sessenta'},
                {valor : 70, extenso : 'setenta'},
                {valor : 80, extenso : 'oitenta'},
                {valor : 90, extenso : 'noventa'},
                {valor : 100, extenso : 'cento'},
                {valor : 200, extenso : 'duzentos'},
                {valor : 1000, extenso : 'mil'}
              ]
var sufixo = [ '', ' mil', ' milh']

var Converter = function(){

}

Converter.prototype.numberToArray = function(number){

  let retorno = []
  let resto = 0

  do{
    if (number <= 20) {
      retorno.push(number)
      break
    }
    
    resto = number % Math.pow(10, (number.toString().length) - 1)
 
    retorno.push(number - resto)
    number = resto

  }while (true)

  return retorno;
}

Converter.prototype.extenso = function(valor){
   
  let retorno = []
  let valorTail
  let valorHead = valor
  
  while (valorHead > 0) {
    valorTail = parseInt(valorHead.toString().slice(-3))  
    valorHead = parseInt(valorHead.toString().slice(0, -3)) 
    retorno.push(this.extenso3Element(valorTail))
  }
  retorno = retorno.map((value, index) =>{
    return value + sufixo[index]
  })

  return retorno.reverse().join(' e ')  
    
}

Converter.prototype.extenso3Element = function(valor){
  let extenso = []
  let numberArray = this.numberToArray(valor)

  for(let number of numberArray){
    extenso.push(unidades.find((element) => element.valor == number).extenso)
  }
   
   return extenso.join(' e ');
}

module.exports = Converter;