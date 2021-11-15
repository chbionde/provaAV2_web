import React from "react";
import {Link} from 'react-router-dom';
import {UsuarioContext} from '../../context/user';

function Home() {
    return (
        <div>
            <h1>
                Home
            </h1>
            <Link to={{
                pathname: "/about",
                state: {
                    nome: "",
                }
            }}>
                Ir para a página Sobre
            </Link>
        </div>
    )
}

export default Home;