const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';

console.log(texto.match(/\.mp3/g));
//Quantidade de vezes que achou .mp3

quantidade = texto.match(/\.mp3/g).length;
console.log(quantidade);

// no futuro...

console.log(texto.match(/\w+\.mp3/g))
