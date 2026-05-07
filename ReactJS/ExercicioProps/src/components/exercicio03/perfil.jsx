// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.
import "./Perfil.css";

// const Perfil = ({ nome, idade, profissao }) => {    
//     return (
//         <p>
//             nome: {nome} <br />
//             idade: {idade} <br />
//             profissao: {profissao}
//         </p>
//     );
// }
// export default Perfil;


export const Cardperfil = ({ nome, idade, profissao }) => {    
    return (
        <article className="card-perfil">
            <span className="card-perfil__title">{nome}</span>
            <span className="card-perfil__title">{idade}</span>
            <span className="card-perfil__title">{profissao}</span>
        </article>
    );
}
export default Perfil;