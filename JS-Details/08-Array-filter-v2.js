let produtos = [
    {
    descricao: `Camisa Polo`,
    Cor: `Azul`,
    Preco: 29.99,
    Perfil: "M",
    Quantidade: 1000,
    Promocao: true
    },
    {
    descricao: ``,
    Cor: `Amarela`,
    Preco: 99.90,
    Perfil: "F",
    Quantidade: 3000,
    Promocao: false
    },
    {
    descricao: `Camisa Polo`,
    Cor: `Verde`,
    Preco: 99.90,
    Perfil: "M",
    Quantidade: 2000,
    Promocao: false
    },
    {
    descricao: `Camisa Polo`,
    Cor: `Marrom`,
    Preco: 29.99,
    Perfil: "F",
    Quantidade: 5000,
    Promocao: true
    },
        {
}];

//Utilizando o filter para filtrar os produtos por Perfil, veja:
// const produtosFemininos = produtos.filter((produto) => {
//     return produto.Perfil == "F";
// });

// console.log(produtosFemininos);

//Utilizando o filter para filtrar os produtos por Promoção, veja:
const produtosPromocao = produtos.filter((produto) => {
    return produto.Promocao == true;
});

console.log(produtosPromocao);

//Retorna todas as camisas em promoção:
// let qtdPromocao = 0;
// const camisasPromocao = produtos.filter((produto) => {
//     if(produto.Promocao == true){
//         qtdPromocao += produto.Quantidade;
//     }
//     return produto.descricao == "Camisa Polo" && produto.Promocao == true;
// });
// console.log(`Quantidade de camisas em promoção: ${qtdPromocao}`);

// console.log(camisasPromocao);


let qtdPromocao = 0;

produtosPromocao.forEach((produto) => {
    qtdPromocao += produto.Quantidade;
});

console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);
console.log(produtosPromocao);