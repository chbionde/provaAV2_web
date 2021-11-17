import React from "react";
import { useLocation, useHistory } from 'react-router-dom';
import {
    TagAbout,
} from "./styles";
function About() {

    let location = useLocation();

    let { nome } = location.state || '';

    let history = useHistory();

    const handleClick = () => {
        // alert('Chat');
        history.push('/chat');
    }
    return (
        <TagAbout>
            <div id="conteiner_about">
                <h1>
                    About {nome}
                </h1>
                <div>
                    <img id="logo" src="/images/olimpiada.png" width='150px' />
                </div>
                <button type="button" id="botao" onClick={handleClick}>
                    Ir para o chat
                </button>
            </div>
        </TagAbout>
    )
}

export default About;