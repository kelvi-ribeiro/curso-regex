const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]/g)); // Não precisa de escape dentro do conjuntos(A MAIORIA);

console.log(texto.match(/[$-?]/g)); // Isso é um intervalo (range)

//NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g));

console.log(texto.match(/[-?]/g));

// Pode precisar d escape dentro do conjunto: - [ ] ^