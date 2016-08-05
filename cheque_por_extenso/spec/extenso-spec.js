var extenso = require('..\\extenso')

describe('Teste para escrever cheques por extenso\n', function(){

    it('escrever cheque no valor de 1,00', function(){

        var expectativa = 'um real(is)'
        expect(expectativa).toEqual(extenso(1))
    });
});