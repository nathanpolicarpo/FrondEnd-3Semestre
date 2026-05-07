import './cardperfil.css';
import people from "../../assets/Foto-de-perfil.jpg";
function CardPerfil() {
    return (
        <div className="card-perfil">
            {/* <!-- elemento/element --> */}
            <img
                    className="card-perfil__image"
                    src={people}
                    alt="foto de perfil do usuário"
                />
        </div>
    );
}
export default CardPerfil;

//Reactjs
//Componentes
//Podem receber dados como parâmetros (props)
//Separar os componentes e montar nossa interface com eles
//com os componentes reutilizáveis



