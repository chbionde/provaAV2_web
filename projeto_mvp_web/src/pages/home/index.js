import React from "react";
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../../context/user';
import {
    TagHome,
} from "./styles";
function Home() {
    return (
        <TagHome>
            <div id="conteiner_home">
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
        </TagHome>
    )
}

export default Home;