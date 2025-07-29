const { texto} = require('./base');
const regExp = /João/gi;

console.log(texto.match(regExp));
console.log(texto.replace(/João/gi, 'Lucas'));
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(texto.replace(/(João|Maria)/gi, function(input){
    return input.toUpperCase();
}));