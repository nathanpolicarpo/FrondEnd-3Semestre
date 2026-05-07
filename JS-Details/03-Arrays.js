// String
// Boolean
// Int
// Char
// Object
// Array

let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Laranja", "Tangerina"];

// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Maçã");

console.log(frutasVermelhas);
console.log(frutasCitricas);

let frutaRemovida = frutasVermelhas.pop();// Remove o último elemento do array e retorna ele
console.log(frutaRemovida);
