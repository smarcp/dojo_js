let Conversor = {};

let romanMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

Conversor.romanToArabic = function(roman){
    return  roman.split("").reverse()
                 .map((value, index, arr) =>{

                    let multiplicator = 1;

                    if (romanMap[value] < romanMap[arr[index -1]])
                        multiplicator = -1;

                   return romanMap[value] * multiplicator;
                 })
                 .reduce((previousValue, currentValue) => {
                       return previousValue += currentValue;
                 }, 0);
}


module.exports = Conversor;