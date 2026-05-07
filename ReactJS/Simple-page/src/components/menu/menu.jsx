import "./menu.css";

function menu() {
    return (
        //  <!-- block/bloco/componente -->
        <nav className="mae">
            <a href="#" className="mae__filho">
                Home</a>
            <a href="#" className="mae__filho">
                Quem Somos</a>
            <a href="#" className="mae__filho">
                Contato</a>
            <a href="#" className="mae__filho mae__filho--success">
                Entrar</a>
            <a href="#" className="mae__filho mae__filho--button-default">
                Cadastrar</a>

            {/* <!-- componente/bloco --> */}
            <CardPerfil />

        </nav>


    );

}

export default menu;
