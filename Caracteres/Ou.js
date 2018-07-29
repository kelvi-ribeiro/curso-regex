const texto = 'Você precisar responder simn não ou não sei!';

console.log(texto.match(/sim|não|sei/g)); // alternativa (OU)
console.log(texto.match(/sim|não sei|não/g));