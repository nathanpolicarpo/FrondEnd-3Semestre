const Contato = ({ nome, telefone, email }) => {
    return (
        <div>
            <h2>{nome}</h2>

            <p>Telefone: {telefone}</p>

            <p>Email: {email}</p>
        </div>
    );
};

export default Contato;