import React,{useContext,useState} from "react";

import {UsuarioContext,} from '../../context/user';

 import {  
     Main,
     Header,
     Content,
     Footer
 } from "./styles";

function Login() {

    const {signIn, signUp} = useContext(UsuarioContext);
    const [email,setEmail] = useState('teste@gmail.com');
    const [password,setpassword] = useState('123456');
    
    const handleLogin = async () => {
        try{
            await signIn(email,password);
        }catch(err){
            console.warn(err);
        }
    }

    const handleCadastro = async () => {
        try{
            await signUp(email,password);
        }catch(err){
            console.warn(err);
        }
    }
    return (
        <Main>
            <Header>
                <p>Header</p>
            </Header>

            <Content>
                <p>Content</p>
            </Content>

            <Footer>
                <p>Footer</p>
            </Footer>
        </Main>

        // <div>
        //     <h1>
        //         Login
        //     </h1>
        //     <button type="button" onClick={handleLogin}>
        //         Logar
        //     </button>
        //     <button type="button" onClick={handleCadastro}>
        //         Cadastrar
        //     </button>
        // </div>
    )
}

export default Login;