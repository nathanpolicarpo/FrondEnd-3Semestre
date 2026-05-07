// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import "./aluno.css"


import "./aluno.css";

const Aluno = ({ nome, curso, imagem }) => {
    return (
        <div className="card">
            <img src={imagem} alt={nome} />

            <h2>{nome}</h2>

            <p>Curso: {curso}</p>
        </div>
    );
};

export default Aluno;


