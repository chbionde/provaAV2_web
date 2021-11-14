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

