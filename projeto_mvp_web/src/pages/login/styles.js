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
    flex:1;

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
    
`;

export const Footer = styled.div`
    display: flex;
    height: 15vh;
    background-color:#AE1B73;
`;

