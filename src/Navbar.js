import React from "react";


function Navbar() {
    return(
        <div className="Navbar">
            <img className='logoSenai' src={require('./SENAI.png')} alt="Logo Senai" width={150}></img>
            <ul className="lista">
                <li className="homeLista">
                  <a href="/Home" className="link"><h2>home</h2></a>
                </li>
                <li className="contatoLista">
                <   a href="/FormularioContato" className="link"><h2>Contato</h2></a>
                </li>
                <li className="qmSomosLista">
                    <a href="/qmSomos" className="link"><h2>Quem Somos</h2></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

