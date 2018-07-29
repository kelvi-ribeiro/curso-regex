const texto = 'a   b';

//Com espape mais o 's' 
console.log(texto.match(/a\s\s\sb/));
//Com escape mais o espaço em branco
console.log(texto.match(/a\ \ \ b/));
//Sem escape, apenas com 3 espaços em brancos
console.log(texto.match(/a   b/));

//no futuro...
console.log(texto.match(/a\s+b/));
console.log(texto.match(/a {3}b/));
console.log(texto.match(/a\s{3}b/))