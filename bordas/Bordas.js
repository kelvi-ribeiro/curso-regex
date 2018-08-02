const texto = 'Romário era um exelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));

// ^ Representa o início da linha/string
console.log(texto.match(/^r/gi));

// $ Representa o fim da linha/string

console.log(texto.match(/r$/gi));

console.log(texto.match(/^r.*r$/gi)); // Problema do dotall