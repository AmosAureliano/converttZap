import React, {useState, useCallback} from 'react';



import LogoPrincipal from '../../assets/images/main-logo.png';
import logoEncurt from '../../assets/images/logo.png';

import './style.css';

export default function Home(){
    const [value, setValue] = useState({});

    var valueOBJ = value;
    function buildLink(val){
        let number = val.tel;
        let message = val.message;

        /*
        let result = document.querySelector('#link-result');

        result = number + " - " + message;
        */
        console.log(number + " - " + message)
    }
    const handleChange = useCallback((e) => {
        setValue({...value,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }, [value])
    
    return(
        <div id="body">
            <div id="content-main">
                <img src={LogoPrincipal}/>
                <h1 id="descr">Gerador de link para Whatsapp</h1>

                <div id="form">
                    <label for="tel-number">Informe o número de telefone</label>
                    <input  placeholder="Digite somente números" name="tel" onChange={handleChange} id="tel-number"/>
                    <label for="message">Informe a mensagem</label>
                    <textarea type="text" id="message" name="message" onChange={handleChange}/>
                    
                    <span id="link-result"></span>
                    <button onClick={buildLink(valueOBJ)}>GERAR LINK</button>
                    
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