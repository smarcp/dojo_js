var Converter = require('..\\Converter')

describe('Teste para escrever cheques por extenso\n', function(){

    var converter = new Converter()

    it('escrever cheque no valor de 1,00', function(){
        var expectativa = 'um real(is)'
        expect(expectativa).toEqual(converter.extenso(1))
    });

    it('escrever cheque no valor de 18,00', function(){
        var expectativa = 'dezoito real(is)'
        expect(expectativa).toEqual(converter.extenso(18))
    });

    xit('escrever cheque no valor de 21,00', function(){

        var expectativa = 'vinte e um real(is)'
        expect(expectativa).toEqual(converter.extenso(21))
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