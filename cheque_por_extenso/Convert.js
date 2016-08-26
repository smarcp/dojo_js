var unidades = [{value : 0, extenso : ''},
                {value : 1, extenso : 'um'}, 
                {value : 2, extenso : 'dois'},
                {value : 3, extenso : 'três'},
                {value : 4, extenso : 'quatro'},
                {value : 5, extenso : 'cinco'},
                {value : 6, extenso : 'seis'},
                {value : 7, extenso : 'sete'},
                {value : 8, extenso : 'oito'},
                {value : 9, extenso : 'nove'},
                {value : 10, extenso : 'dez'},
                {value : 11, extenso : 'onze'},
                {value : 12, extenso : 'doze'},
                {value : 13, extenso : 'treze'},
                {value : 14, extenso : 'quatorze'},
                {value : 15, extenso : 'quinze'},
                {value : 16, extenso : 'dezesseis'},
                {value : 17, extenso : 'dezessete'},
                {value : 18, extenso : 'dezoito'},
                {value : 19, extenso : 'dezenove'},
                {value : 20, extenso : 'vinte'},                
                {value : 30, extenso : 'trinta'},
                {value : 40, extenso : 'quarenta'},
                {value : 50, extenso : 'cinquenta'},
                {value : 60, extenso : 'sessenta'},
                {value : 70, extenso : 'setenta'},
                {value : 80, extenso : 'oitenta'},
                {value : 90, extenso : 'noventa'},
                {value : 100, extenso : 'cento'},
                {value : 200, extenso : 'duzentos'},
                {value : 300, extenso : 'trezentos'},
                {value : 400, extenso : 'quatrocentos'},
                {value : 500, extenso : 'quinhentos'},
                {value : 600, extenso : 'seiscentos'},
                {value : 700, extenso : 'setecentos'},
                {value : 800, extenso : 'oitocentos'},
                {value : 900, extenso : 'novecentos'},
              ]

var suffix = [ '', ' mil', ' milh', 'bilh', 'trilh', 'quadrilh', 'quintilh']

var Convert = function() {

}

Convert.prototype.numberToArray = function(number) {

    let result = []
    let rest = 0

    while (number > 20) {

        rest = number % Math.pow(10, (number.toString().length) - 1)

        result.push(number - rest)
        number = rest
    }

    if (number != 0) {
        result.push(number)
    }

    return result;
}

Convert.prototype.extenso = function(value) {

    let integerValue = value*100
    let result = []

    result.push(integerValue.toString().slice(0, -2));
    result.push(integerValue.toString().slice(-2));

    var reais = this.extensoInteger(result[0]);

    var centavos = this.extensoInteger(result[1]);
    
    if (centavos) {
        centavos += (centavos == 'um') ? ' centavo' : ' centavos'
        centavos = ' e ' + centavos
    }
    reais += (reais == 'um' || reais == 'zero') ? ' real' : ' reais'

    return reais + centavos

}

Convert.prototype.extensoInteger = function(value) {

    let result = []
    let valueTail
    let valueHead = value

    if (!value)
        return 'zero'


    while (valueHead > 0) {
        valueTail = parseInt(valueHead.toString().slice(-3))
        valueHead = parseInt(valueHead.toString().slice(0, -3))
        result.push(this.extensoCentenas(valueTail))
    }

    result = result.map((value, index) => {
        
        var a = ''
        if (index > 1)
            a = (value != 'um') ? 'ões' : 'ão'
        return value + suffix[index] + a
    })

    return result.filter((value) => value !== '')
                  .reverse()
                  .join(' e ')
}


Convert.prototype.extensoCentenas = function(value) {
    let extenso = []
    let numberArray = this.numberToArray(value)

    if ( value == 100 ){
        return 'cem'
    }

    for (let number of numberArray) {

        if (number != 0) {
            extenso.push(unidades.find((element) => element.value == number).extenso)
        }

    }

    return extenso.join(' e ');
}

module.exports = Convert;