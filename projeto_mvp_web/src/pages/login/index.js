import React,{useContext,useState} from "react";

import {UsuarioContext,} from '../../context/user';

// import {  } from "./styles";

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
        <div>
            {/* <h1>
                Login
            </h1>
            <button type="button" onClick={handleLogin}>
                Logar
            </button>
            <button type="button" onClick={handleCadastro}>
                Cadastrar
            </button> */}
        </div>
    )
}

export default Login;