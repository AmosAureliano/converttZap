import React from 'react';
import LogoPrincipal from '../../assets/images/main-logo.png';
import logoEncurt from '../../assets/images/logo.png';
import './style.css';

export default function Home(){
    return(
        <div id="body">
            <div id="content-main">
                <img src={LogoPrincipal}/>
                <h1 id="descr">Gerador de link para Whatsapp</h1>

                <div id="form">
                    <label for="tel-number">Informe o número de telefone</label>
                    <input type="tel" id="tel-number"/>
                    <label for="message">Informe a mensagem</label>
                    <input type="text" id="message"/>

                    <button>GERAR LINK</button>
                    
                </div>
                <span id="warning-data">*Não guardamos nenhum dado informado</span>
               
            </div>

            <div id="text-informations">
                <h2>Como Funciona?</h2>
                <p>1 - Insira o nº do WhatsApp Ex: 85 9 9660-5866<br/>
                    2 - Escreva a mensagem padrão que será exibida<br/>
                    3 - Clique em “GERAR LINK”<br/>
                    4 - Copie o link e compartilhe<br/>
                    5 - Antes de usar, faça o teste
                </p>
                <div id="img-footer"><img src={logoEncurt}/></div>
                
            </div>
        </div>
    );

}