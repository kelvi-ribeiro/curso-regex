const texto = `
Lista telfônica:
    - (11) 98756-1212
    -      98674-5321
`
const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g
console.log(texto.match(regex));