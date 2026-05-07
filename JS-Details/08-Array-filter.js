// O Array filter é utilizado para criar um novo array com todos os elementos que passaram em um teste implementado por uma função fornecida. Ele é muito útil para filtrar dados de um array com base em condições específicas.

// Exemplo de uso do Array filter:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 10];

const numeroencontrados = numeros.filter((numero) => {
    return numero == 10;
});

console.log(numeroencontrados);//mostra os numeros encontrados no array, ou seja, os numeros que passaram no teste do filter.

const nomes = [
    "Nathan",
    "Igor",
    "Gustavo",
    "Maria",
    "João",
    "Ana",
    "Pedro",
    "Lucas",
    "Mariana",
    "Carla",
    "Rafael",
    "Fernanda",
    "Bruno",
    "Camila",
    "Ricardo",
];

// pessoasLegais = nome.filter((nome) => {
pessoasLetraN = nomes.filter((nome) => {
    const primeiraLetra = nome.substring(0, 1);//Começa no carecter 0 e pega apenas o primeiro caracter do nome
    return primeiraLetra == "N" || primeiraLetra == "L" || primeiraLetra == "M";
    // return nome.length <= 3 || nome.length == 6;
});
// console.log(pessoasLegais);
console.log(pessoasLetraN);