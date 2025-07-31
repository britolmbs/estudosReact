//<.+>.+<\/.+> - greedy
//<.+?>.+?<\/.+?> - non greedy

const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g));
console.log(html.match(/<.+?>.+?<\/.+?>/g));