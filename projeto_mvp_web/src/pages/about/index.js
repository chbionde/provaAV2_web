import React from "react";
import {useLocation, useHistory} from 'react-router-dom';

function About() {

    let location = useLocation();

    let {nome} = location.state || '';

    let history = useHistory();

    const handleClick = () => {
        // alert('Chat');
        history.push('/chat');
    }
    return (
        <div>
            <h1>
                About {nome}
            </h1>
            <button type="button" onClick={handleClick}>
                Ir para o chat
            </button>
        </div>
    )
}

export default About;