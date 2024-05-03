import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="txtFooter">
                <h3>© 2024 Todos os direitos reservados ao povo do 3°/Informática para internet.</h3>
            </div>
            <div className="subFooter">
                <h3>Contato: osmelhores@sesisenai.com</h3>
            </div>
            <img className='logoSesi' src={require('./SESI.png')} alt="Logo Senai" width={150}></img>
        </div>  
    )
}

export default Footer;