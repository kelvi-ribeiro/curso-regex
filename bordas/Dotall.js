const texto = 'Romário era um exelente jogador\n, mas hoje é um político questionador';


// Problema do dotall
console.log(texto.match(/^r.*r$/gi)); 

// Resolvendo o problema do dotall com javascript
console.log(texto.match(/^r[\s\S]*r$/gi))