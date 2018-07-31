const texto = `
os e-mails dos convidados são: 
    - kelvi.ribeiro@unigranrio.br
    - antonio.pestana@unigranrio.edu.br
    - thais.ribeiro@gmail.br
    - kauan.martins@gmail.com
    - marcia@gmail.br`
    
    const regex1 = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/gi;
    const regex2 = /\w+@\w+\.\w{2,4}/gi;
    const regex3 = /[\w.]+@\w+\.\w{2,4}/gi;
    const regex4 = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/gi;
    
    console.log(texto.match(regex1));
    console.log(texto.match(regex2));
    console.log(texto.match(regex3));
    console.log(texto.match(regex4));

    // No futuro...

    consolog.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/gi))