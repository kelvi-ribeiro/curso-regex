// Shortrand é uma forma reduzida de pegar um conjunto de caracteres
// Geralmente, um grupo de caracteres muito usado, possui um Shortrand
const texto = `1,2,3,4,5,6a.b c!d?e	-
f_g`
// Pega os Números equivale a [0-9]
console.log(texto.match(/\d/g)); 

// Pega tudo que não for número equivale a  [^0-9]
console.log(texto.match(/\D/g)); 

// Pega os caracteres que equivale a [a-zA-Z0-9_]
console.log(texto.match(/\w/g)); 

// Pega os NÃO caracteres que equivale a [^a-zA-Z0-9_]
console.log(texto.match(/\W/g));

// Pega os espaços em branco, tabs e new Line equivale a [ \t\n\r\f]
console.log(texto.match(/\s/g));

//Pega tudo que NÃO for espaço em branco equivale a equivale a [^ \t\n\r\f]
console.log(texto.match(/\S/g));


