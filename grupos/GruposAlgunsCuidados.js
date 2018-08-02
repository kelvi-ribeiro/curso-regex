const texto = 'Pedrinho (Filho do Pedro Silva) é doutor do ABC';

//Não é um grupo
console.log(texto.match(/[(abc)]/gi));

console.log(texto.match(/([abc])/gi));

console.log(texto.match(/(abc)/gi));