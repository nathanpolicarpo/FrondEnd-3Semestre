let Estoque = [
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
    }
];


//Reduz o Array a um unico elemento. No caso um somatorio, por exemplo:
let totalPreco = 0;
let totalEstoque = Estoque.reduce((total, produto) => {
    totalPreco += produto.Preco * produto.Quantidade;
    return total + produto.Quantidade;
}, 0);

console.clear();
console.log(`voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do estoque é R$: ${totalPreco}`);