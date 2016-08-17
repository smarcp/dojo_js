var Converter = require('..\\Converter')

describe('Teste para escrever cheques por extenso\n', function(){

    var converter = new Converter()

    it('escrever cheque no valor de 1,00', function(){
        var expectativa = 'um'
        expect(expectativa).toEqual(converter.extenso(1))
    });

    it('escrever cheque no valor de 18,00', function(){
        var expectativa = 'dezoito'
        expect(expectativa).toEqual(converter.extenso(18))
    });

    it('escrever cheque no valor de 21,00', function(){

        var expectativa = 'vinte e um'
        expect(expectativa).toEqual(converter.extenso(21))
    });

     it('escrever cheque no valor de 1001,00', function(){

        var expectativa = 'um mil e um'
        expect(expectativa).toEqual(converter.extenso(1001))
    });

     it('escrever cheque no valor de 1158287,00', function(){

        var expectativa = 'um milh e cento e cinquenta e oito mil e duzentos e oitenta e sete'
        expect(expectativa).toEqual(converter.extenso(1158287))
    });
});

describe('Teste quebrar numero em array\n', function(){

    var converter = new Converter()

    it('Quebrar numero 21 em [20, 1]', function(){

        var expectativa = [20, 1]
        expect(expectativa).toEqual(converter.numberToArray(21))
    })

    it('Quebrar numero 2751 em [2000, 700, 50, 1]', function(){

        var expectativa = [2000, 700, 50, 1]
        expect(expectativa).toEqual(converter.numberToArray(2751))
    })

})