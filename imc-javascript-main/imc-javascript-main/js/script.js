async function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const nome = document.getElementById("nome").value.trim();

    console.log(peso);
    console.log(altura);


    if (nome.leght == 0 || isNaN(peso) || isNaN(altura)) {
        alert("Preencha todos os campos");
        return false;
    }

    console.log("Liberado para cadstrar");
    //calcular o imc
    const imc = calcularIMC(peso, altura);
    console.log(imc);
    //gerar a situacao
    const textoSituacao = gerarSituacao(imc);
    console.log(textoSituacao);
    //Gerar um objetos JS com os dados
    const objimc = {
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        situacao: textoSituacao
    };
    //Cadastar uma API
    const dadosGravados = await cadastrarAPI(objimc);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert(dadosGravados.error);
    } else {
        //Mostrar no html (inserir a linha na tabela)
        carregarcadastrados();
    }

}   //Fim da função

const capitalize = 



async function carregarDados() {
    //fazer o fatch
    try {
        const retorno = await fetch("http://localhost:3000/");
    } catch (error) {
        console.log(error);
        alert("Carregando os dados...");
    }
    
    //carregar os dados no html
    const retorno = await fetch("http://localhost:3000/");
    const dadoscadastrados = await retorno.json();

    console.log(dadoscadastrados);

    dadoscadastrados.sort( (a, b) => {
        return a.nome.localeCompare(b.nome)
    });



    document.getElementById("cadastro").innerHTML = "";
    dadoscadastrados.forEach( pessoa => {
        mostrarNaTela(pessoa);
        
        });

    
}



async function cadastrarAPI(objCadastro) {
    //Fazer um post para a API

    try {
        const retorno = fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const dadosGravados = retorno.json();
        console.log(dadosGravados);
    } catch (error) {
        console.log(error);
        return await {
            error: "Não foi possível cadastrar os dados"
        }
    }
}

function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `
    <tr>
        <td>${pessoa.nome}</td>
        <td>${pessoa.altura}</td>
        <td>${pessoa.peso}</td>
        <td>${pessoa.imc.toFixed(2)}</td>
        <td>${pessoa.situacao}</td>
    </tr>`
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;
// 16 a menor que 17 – Magreza moderada;
// 17 a menor que 18,5 – Magreza leve;
// 18,5 a menor que 25 – Saudável;
// 25 a menor que 30 – Sobrepeso;
// 30 a menor que 35 – Obesidade Grau I;
// 35 a menor que 40 – Obesidade Grau II (considerada severa);
// Maior que 40 – Obesidade Grau III (considerada mórbida).
//A função deve receber o valor do IMC e retornar a situação correspondente, conforme a tabela acima.
function gerarSituacao(imc) {
    if (imc < 16)
        return "Magreza grave";
    else if (imc >= 16 && imc < 17)
        return "Magreza moderada";
    else if (imc >= 17 && imc < 18.5)
        return "Magreza leve";
    else if (imc >= 18.5 && imc < 25)
        return "Saudável";
    else if (imc >= 25 && imc < 30)
        return "Sobrepeso";
    else if (imc >= 30 && imc < 35)
        return "Obesidade Grau I";
    else if (imc >= 35 && imc < 40)
        return "Obesidade Grau II (considerada severa)";
    else
        return "Obesidade Grau III (considerada mórbida)";
}
