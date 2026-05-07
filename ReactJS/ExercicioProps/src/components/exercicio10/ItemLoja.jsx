const Loja = ({ nome, preco, categoria, estoque }) => {
    return (
        <div>
            <h2>{nome}</h2>

            <p>Preço: R$ {preco}</p>

            <p>Categoria: {categoria}</p>

            <p>
                Status:
                {estoque > 0
                    ? " Produto disponível"
                    : " Produto indisponível"}
            </p>
        </div>
    );
};

export default Loja;