var unidades = [{valor : 0, extenso : 'zero'},
                {valor : 1, extenso : 'um'}, 
                {valor : 2, extenso : 'dois'},
                {valor : 3, extenso : 'três'},
                {valor : 4, extenso : 'quatro'},
                {valor : 5, extenso : 'cinco'},
                {valor : 6, extenso : 'seis'},
                {valor : 7, extenso : 'sete'},
                {valor : 8, extenso : 'oito'},
                {valor : 9, extenso : 'nove'}]

var extenso = function(valor){
   
   var retorno;

   retorno = unidades.find((element) => element.valor == valor).extenso
   // if (valor == 1)
   // {
   //      retorno = 'um';
   // }

   return retorno + ' real(is)';
};

module.exports = extenso;