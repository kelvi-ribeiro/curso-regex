// FLAGS
// g - global
// i - ignore case

const texto = 'Carlos Assinou o abaixo-assinado';
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/));
console.log(texto.match(/ab|c/gi));