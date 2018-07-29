const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g));

console.log(texto.match(/a-c/g)); // Não define um range

console.log(texto.match(/[A-z]/g)); // Intervalos usam a ordem da tabela UNICODE

// Tem que respeitar a ordem da tabela UNICODE ou a tabela que você estiver usando

//console.log(texto.match(/[a-Z]/g)); NÃO RESPEITA A ORDEM DA TABELA UNICODE, GERANDO ERROS
//console.log(texto.match(/[4-1]/g))

