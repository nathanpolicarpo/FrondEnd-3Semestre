const numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

//Rodar o map gerando um novo array com o dobro dos numeros do array antigo.
//apos, exiba o valoresdo array dobro no console utilizando foreach.



console.log(`Array original: ${numeros}`);

const dobro = numeros.map((numero) => {
    return numero * 2;
});

let textoResultado = "Array modificado: ";
dobro.forEach((numero) => {
    textoResultado += `${numero} | `;//concatena o numero
});

//remover o ultimo pipe
// str.substring(0, str.length - 1);//mostra o texto completo sem o ultimo pipe
textoResultado = textoResultado.substring(0, textoResultado.length - 3);
console.log(textoResultado);//mostra o texto completo