var Converter = require('..\\Convert')

describe('Teste para escrever por extenso\n', function() {

    var converter = new Converter()

    it('escrever cheque no valor de 1,00', function() {
        var expectativa = 'um real'
        expect(expectativa).toEqual(converter.extenso(1))
    });

    it('escrever cheque no valor de 18,00', function() {
        var expectativa = 'dezoito reais'
        expect(expectativa).toEqual(converter.extenso(18))
    });

    it('escrever cheque no valor de 21,00', function() {

        var expectativa = 'vinte e um reais'
        expect(expectativa).toEqual(converter.extenso(21))
    });

    it('escrever cheque no valor de 1000,00', function() {

        var expectativa = 'um mil reais'
        expect(expectativa).toEqual(converter.extenso(1000))
    });

    it('escrever cheque no valor de 1001,00', function() {

        var expectativa = 'um mil e um reais'
        expect(expectativa).toEqual(converter.extenso(1001))
    });

    it('escrever valor 100', function(){

        var expectativa = 'cem reais'
        expect(expectativa).toEqual(converter.extenso(100))
    })

    it('escrever valor 101', function(){

        var expectativa = 'cento e um reais'
        expect(expectativa).toEqual(converter.extenso(101))
    })

    it('escrever cheque no valor de 1158287,00', function() {

        var expectativa = 'um milhão e cento e cinquenta e oito mil e duzentos e oitenta e sete reais'
        expect(expectativa).toEqual(converter.extenso(1158287))
    });


});

describe('Teste quebrar numero em array\n', function() {

    var converter = new Converter()

    it('Quebrar numero 21 em [20, 1]', function() {

        var expectativa = [20, 1]
        expect(expectativa).toEqual(converter.numberToArray(21))
    })

    it('Quebrar numero 2751 em [2000, 700, 50, 1]', function() {

        var expectativa = [2000, 700, 50, 1]
        expect(expectativa).toEqual(converter.numberToArray(2751))
    })

})