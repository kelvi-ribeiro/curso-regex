// No início...
// Um byte (8 bits) - 256 Caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, + Pontuação, A-Z, a-z, 0-9

// Unidade
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 milhão de Caracteres
// Atualmente tem mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt/

const texto = 'aʬc௵';

console.log(texto.match(/\u02AC|\u0BF5/g))