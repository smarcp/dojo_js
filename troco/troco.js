function calculos(){
    let cedulas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
    let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

    getFloat = function (a, precision) {
        let x = Math.pow(10, precision || 2);
        return (Math.round(a * x)) / x;
    }

    _troco = function(valorCompra, valorPago){

        let troco = valorPago - valorCompra;
        let resultado = { cedulas : [], moedas : []};
        let valorSelecionado = 0;

        while (troco > 0){

            if (troco >= 2){

                valorSelecionado = Math.max.apply(null, cedulas.filter(v => v <= troco));
                resultado.cedulas.push(valorSelecionado);
            }
            else {
                valorSelecionado = Math.max.apply(null, moedas.filter(v => v <= troco));
                resultado.moedas.push(valorSelecionado);
            }
            troco = getFloat(troco - valorSelecionado)

        };

        return resultado;
    }

    return {
        troco: _troco
    };
}

module.exports = calculos();