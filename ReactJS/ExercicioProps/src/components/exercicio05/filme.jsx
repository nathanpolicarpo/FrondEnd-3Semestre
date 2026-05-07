// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.

// Crie pelo menos 3 filmes diferentes.
import "./filme.css";

const Filme = ({titulo, ano, genero, nota}) => {
    return (
        
    
        <p>
            Titulo: {titulo} <br />
            Ano: {ano} <br />
            Genêro: {genero} <br />
            Nota: {nota.toFixed(2)}
        </p>
    
    );
}
export default Filme;