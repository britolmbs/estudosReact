// g - global (encontra todas as ocorrencias) -  flag
// i - insensitive
// () Grupo
// | Ou

const { texto } = require('./base');
const regExp = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp.exec(texto);

if(null){
    console.log(found[0]);
    console.log(found[1]);
}
