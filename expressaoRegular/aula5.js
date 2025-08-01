//[] - conjunto [^] - Negação
//[-] - Qualquer um ate outra coisa // Sempre do menor para o maior

const { alfabeto } = require('./base');

console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]+/g)); // nega o abc123
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); //Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g)); // Negação
console.log(alfabeto.match(/\d+/g)); // equivale a [0-9]
console.log(alfabeto.match(/\D+/g)); //negação
console.log(alfabeto.match(/\s+/g)); //Seleciona os espaços