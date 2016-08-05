var calculos = require('..\\troco');

describe("Teste de troco", function(){

    it("Retornando troco de 40", function(){

        var expected = { cedulas : [20.00, 20.00], moedas : []};

        expect(expected).toEqual(calculos.troco(10, 50))
        expect(expected).toEqual(calculos.troco(10, 50))

    });

    it("Retornando troco de 0,77", function(){

        var expected = { cedulas : [], moedas : [0.50, 0.25, 0.01, 0.01]};

        expect(expected).toEqual(calculos.troco(0.23, 1.00));

    });

    it("Retornando troco de 0,85", function(){

        var expected = { cedulas : [], moedas : [0.50, 0.25, 0.10]};

        expect(expected).toEqual(calculos.troco(0.15, 1.00));

    });


    it("Retornando troco de 12,50", function(){

        var expected = { cedulas : [10.00, 2.00], moedas : [0.50]};

        expect(expected).toEqual(calculos.troco(7.50, 20));

    });

    it("Retornando troco de 77,88", function(){

        var expected = { cedulas : [50.00, 20.00, 5.00, 2.00], moedas : [0.50, 0.25, 0.10, 0.01, 0.01, 0.01]};

        expect(expected).toEqual(calculos.troco(22.12, 100));

    });

});