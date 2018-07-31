// Desafio CPF
const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 833.596.360-66
    - 561.425.580-07
`


const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(texto.match(regex));