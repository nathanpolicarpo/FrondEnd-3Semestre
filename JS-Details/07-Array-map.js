const hobby = [
    "Correr",
    "Jogar",
    "Cozinhar",
    "Viajar",
    "Dormir",
    "Estudar",
    "Programar",
    "Ler",
    "Escrever",
    "Desenhar",
    "Fotografar",
    "Cantar",
    "Dançar",
    "Nadar",
    "Andar de bicicleta"
];

//Utilizando para iterar arrays e retorna um novo array, compondo um novo resultado para cada indice do array antigo, veja:

const novosHobbys = hobby.map((hobby) =>{
    return `<p>${hobby}</p>`;
});

console.log(novosHobbys);