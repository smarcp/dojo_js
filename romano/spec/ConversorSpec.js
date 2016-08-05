var conversor = require("..\\Conversor");

describe("Testando função de converter para romano\n", function(){

    it("Converter X para 10",    function(){

        expect(10).toEqual(conversor.romanToArabic("X"));
    });

    it("Converter V para 5",    function(){

        expect(5).toEqual(conversor.romanToArabic("V"));
    });

    it("Converter XX para 20", function(){

        expect(20).toEqual(conversor.romanToArabic("XX"));
    });

    it("Converter XXX para 30", function(){

        expect(30).toEqual(conversor.romanToArabic("XXX"));
    });

    it("Converter IV para 4", function(){

        expect(4).toEqual(conversor.romanToArabic("IV"));
    });

    it("Converter IX para 9", function(){

        expect(9).toEqual(conversor.romanToArabic("IX"));
    });

    it("Converter L para 50", function(){

        expect(50).toEqual(conversor.romanToArabic("L"));
    });

    it("Converter XL para 40", function(){

        expect(40).toEqual(conversor.romanToArabic("XL"));
    });

});