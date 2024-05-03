import React from "react";
import './Home.css';


function Home(){
    return (
        <div className="Home">
            <div className="titulo">
                <h1>Bem-vindo á Página inicial da nossa AV2</h1>
            </div>
            <div className="subtitulo">
                <p className="sub">Conheça os melhores Cosplays do SESI/SENAI.</p>
            </div>
            <div className="container">
                <img className='Tmonica' src={require('./FOTO3.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">Povo da Turma da Mônica</p>

                <img className='foveiras' src={require('./FOTO6.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">Foveiras e o Teacher TOP!!!</p>

                <img className='operadoras' src={require('./FOTO7.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">As Operadoras TIM e Claro + Flanelinha</p>

                <img className='tigrinho' src={require('./FOTO5.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">Tigrinho Man</p>

                <img className='dolly' src={require('./FOTO4.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">Dollynho e não sei as outras duas</p>
                
                <img className='turma' src={require('./HOME.jpg')} alt="Logo Senai"></img>
                <p className="subImagem">A Turma Mais F$#% do SESI/SENAI</p>
            </div>
        </div>
    )
}

export default Home;