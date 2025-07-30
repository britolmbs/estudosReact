// Quantificador
// * (opicionais) 0 ou n vezes
// + (Obrigatorio) 1 ou n vezes
// ? (opicionais) 0 ou 1 vezes
// \ Caracter de escape
// {n, m} - Quantidade de vezes e maximo de vezes - minimo e maximo
//{10,} no minimo 10 ou {,10} maximo de 10


const  { texto , arquivos } = require('./base');

const regExp = /João/gi
const regExp2 = /Jo+ão+/gi
const regExp3 = /\.(jpg|jpeg)/gi
const regExp4 = /\.jpe?g/gi
 // tambem pode const regExp4 = /\.jpe*g/gi - pode pegar extensão errada
 //const regExp = /\.jpe{0,}g/gi ou {1,} - Força que "e" exista e não ve o JPG . {0, 1} se comporta igual com ?

console.log(texto.match(regExp));
console.log(texto.match(regExp2));


for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp4);

    if(!valido) continue;
    console.log(arquivo, valido);

    //console.log(arquivo, arquivo.match(regExp3));
    //console.log(arquivo, arquivo.match(regExp4));
}