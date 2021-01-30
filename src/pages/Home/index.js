import React, {useState} from 'react';
import LogoPrincipal from '../../assets/images/main-logo.png';
import logoEncurt from '../../assets/images/logo.png';
import './style.css';

export default function Home(){
    const[link, setLink] = useState();

    function buildLink(){
        let numberTel = document.querySelector("#tel-number").value;
        numberTel.replace(/\D/g, '');
        let message = document.querySelector("#message").value;
        let result = document.querySelector("#link-result");
        if(numberTel == "" && message == ""){
            result.innerHTML = "*Preencha os campos";
        }else if(numberTel == "" || message == ""){
            result.innerHTML = "*Preencha os campos";
        }else{       
            result.innerHTML = "https://api.whatsapp.com/send?phone=55" + numberTel + "&text=" + message;
            document.getElementById("buttons-before").style.display = "flex";
            document.getElementById("gera-link").style.display = "none";
            setLink(result.innerHTML)
        }
    }

    function reload(){
        window.location.reload(true);
    }
    
    function copyToClipboard(){
        let copyLink = document.querySelector("#copy-link");
        copyLink.addEventListener('click', (e) => {
            e.preventDefault();
            let result = document.querySelector("#link-result");
            navigator.clipboard.writeText(link);
            result.innerHTML = "Seu link foi copiado para a área de transferência, para visualiza-lo cole em algum lugar";
        });
    }

    return(
        <div id="body">
            
            <div id="content-main">
                <img src={LogoPrincipal}/>
                <h1 id="descr">Gerador de link para Whatsapp</h1>
                <div id="form">
                    <label for="tel-number">Informe o número de telefone</label>
                    <input  placeholder="Informe a partir do DDD" type="number" name="tel" id="tel-number"/>
                    <label for="message">Informe a mensagem</label>
                    <textarea type="text" id="message" name="message" placeholder="Olá tudo bem?!" />
                    <span id="link-result"></span>
                    <div id="buttons-before">
                        <button id="reload" onClick={reload} style={{backgroundColor: '#6967B6'}}>Gerar Novo Link</button>
                        <button id="copy-link" onClick={copyToClipboard}>Copiar</button>
                    </div>
                    <button onClick={buildLink} id="gera-link">Gerar Link</button>             
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