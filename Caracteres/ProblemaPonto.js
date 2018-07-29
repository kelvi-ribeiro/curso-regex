const texto = 'Bom\ndia';

console.log(texto.match(/./gi));
console.log(texto.match(/..../gi)); // O ponto não engola o \n

//dotall - algumas linguagem tem uma flag para resolver esse problema
// flag: /exp/s, mas o JS não!