import React,{useContext,useState} from "react";

import {UsuarioContext,} from '../../context/user';

 import {  
     Main,
     Header,
     Content,
     Footer,
     ContainerLogoPharse,
     ContainerSignIn,

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
              
            </Header>

            <Content>
               <ContainerLogoPharse>
                <div id="logo">
                    <img src = "/images/olimpiada.png" width='150px'/>
                </div>
                <div id="pharse">
                    <p>Problemas para formar</p>
                    <p>um grupo de trabalho?</p>
                    <p>O Grupou! Resolve!</p>
                </div>
               </ContainerLogoPharse>
               <ContainerSignIn>
                    <div id="conteinerLogin">
                        <div id="conteinerButtons">
                            <div class="button inativo">
                                Membro
                            </div>
                            <div class="button inativo">
                                Convidado
                            </div>
                        </div>
                        <div class="box">
                            <div class="title">
                                E-mail
                            </div>
                            <input placeholder="Digite seu e-mail" />
                        </div>
                        <div class="box">
                            <div class="title">
                                Senha
                            </div>
                            <input placeholder="Digite sua senha" />
                        </div>
                        <div id="conteinerLoginOrJoin">
                            <div class="button">
                                Cadastre-se
                            </div>
                            <div class="button">
                                Entrar
                            </div>
                        </div>
                    </div>
               </ContainerSignIn>
            </Content>

            <Footer>
               <div id="logo">
                    <img src = "/images/olimpiada.png" width='150px'/>
               </div>
               <div id="about">
                    <p>
                        Contato
                    </p>
                    <p>
                        contato@contato.com
                    </p>
               </div>
               <div id="social">
                    <img src = "/images/Facebook.png" width='50px'/>
                    <img src = "/images/Instagram.png" width='50px'/>
                    <img src = "/images/Linkedin.png" width='50px'/>
               </div>
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