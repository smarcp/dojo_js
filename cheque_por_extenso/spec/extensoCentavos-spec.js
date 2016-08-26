var Converter = require('..\\Convert');

describe('Extenso com centavos', function() {

    var converter = new Converter()

    it('Convertendo 10.51', function() {
        
        var expectativa = 'dez reais e cinquenta e um centavos';
        expect(expectativa).toEqual(converter.extenso(10.51));
    });

    it('Convertendo 10.50', function() {
        
        var expectativa = 'dez reais e cinquenta centavos';
        expect(expectativa).toEqual(converter.extenso(10.50));
    });

     it('Convertendo 0.45', function() {
        
        var expectativa = 'zero real e quarenta e cinco centavos';
        expect(expectativa).toEqual(converter.extenso(0.45));
    });

      it('Convertendo 1.01', function() {
        
        var expectativa = 'um real e um centavo';
        expect(expectativa).toEqual(converter.extenso(1.01));
    });

    it('Convertendo 0.1000', function() {
        
        var expectativa = 'zero real e dez centavos';
        expect(expectativa).toEqual(converter.extenso(0.1000));
    });
});