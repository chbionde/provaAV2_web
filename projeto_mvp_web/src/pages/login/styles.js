import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;

export const Header = styled.div`
    height:15vh;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex:2;

`;

export const ContainerLogoPharse = styled.div`
    display: flex;
    flex:2;
    flex-direction:column;

    #logo{
        padding: 50px 0 0 2vw;
    }

    #pharse{
        padding-left:3vw;
        padding-top:20px;
    }

    #pharse p{
        font-size:30px;
        color:#fff;
        line-height:15px;
    }
`;

export const ContainerSignIn = styled.div`
    display: flex;
    flex:1;
    min-width: 500px;
    align-items: center;

    #conteinerLogin{
        width: 20vw;
        background-color: #fff;
        min-width: 350px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        color: #333;
    }

    #conteinerLogin #conteinerButtons{
        display: flex;
        flex-direction: row;


    }

    #conteinerLogin #conteinerButtons .button{
        border-bottom: 4px solid #ae1b73;
        padding-bottom: 10px;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin: 0px 5px;
        color: #673f66;
        cursor: pointer;
        text-align: center;

    }

    #conteinerLogin #conteinerButtons .inativo{
        border-bottom: none;
        color: #e6e6e6;
    }
    #conteinerLogin #conteinerButtons .inativo:hover{
        border-bottom: 4px solid #ae1b73;
        color: #673f66;
    }

    .box{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }
    .box .title{
        color: #ccc;
        font-size: 15px;
        margin-bottom: 5px;
    }

    .box input{
        border: 1px solid #ccc;
        height: 50px;
        border-radius: 5px;
        padding: 0 20px;
        margin-top: 5px;

    }

    #conteinerLoginOrJoin {
        display: flex;
        flex-direction: row;
    }

    #conteinerLoginOrJoin .button{
        display: flex;
        height: 50px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #ae1b73;
        justify-content :center;
        align-items: center;
        color: #ae1b73;
        flex: 1;
        margin-top: 40px;
        cursor: pointer;
    }

    #conteinerLoginOrJoin .button:hover{
        opacity: 0.9;
    }
    #conteinerLoginOrJoin .button:first-child{
        margin-right: 15px;
    }
    #conteinerLoginOrJoin .inverte:hover {
        background-color: #ae1b73;
        color: white;
    }
    .forgotCredentials{
        color: #ae1b73;
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        margin-top: 5px;
        cursor: pointer;
    }
`;

export const Footer = styled.div`
    display: flex;
    height: 15vh;
    background-color:#ae1b73;

    #logo{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    #about{
        flex: 4;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
    }

    #about p{
        font-size: 12px;
        line-height: 2px;
    }
    #social{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }

`;

