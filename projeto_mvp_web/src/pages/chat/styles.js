import styled from "styled-components";

export const Main = styled.div`

    display:flex;
    min-height:100vh;
    flex-direction:column;
     
    #logo{
        display: flex;
        flex: 1;
    }
    
    #buttonSair{
        display: flex;
        align-items: flex-end;
        margin-right: 5vw;
    }

    #buttonSair #bSair{
        background-color: #DE8BBA;
        border-radius: 9px;
        cursor: pointer;
        opacity: 0.5;
        height: 45px;
        width: 45px;
    }
    #buttonSair #bSair:hover{
        opacity: 1;
    }

    
`;

export const Header = styled.div`
    height:15vh;
    display:flex;
    align-items:center;
    justify-content: center;

    #logo p{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2vw;
        color: #ae1b73;
        
    }   
`;

export const DivChat = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    
    #conteinerMSG {
        width: 50vw;
        margin: 10px;
        background-color: #D9D7D8;
        border-radius: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        color: black;
        display: flex;
        flex-direction: column;
    }
    
    #conteinerMSG #nameDate {
        display: flex;
        flex-direction: row;
    }
    #conteinerMSG .textoMsg {
        display: block;
        flex-direction: row;
        margin-left: 15px;
        width: 95%;
        word-wrap:break-word; 
        
    }
    #conteinerMSG #nameDate .userName{
        display: flex;
        flex: 1;
        font-size: 18px;
        line-height: 0px;
    }
    #conteinerMSG #nameDate .sendDate{
        display: flex;
        align-items: flex-end;
        margin-right: 15px;
        font-size: 10px;
        color: #4A072D;
    }
`;
export const UserChat = styled.div`
    display:flex;
    flex: 1;
    flex-direction:row;
    align-items: center;
    margin-top: 1vw;
    margin-bottom: 1vw;

    #inputMensages {
        flex: 1;
        border-radius: 9px;
        border-bottom: 2px;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 15px;
        color: black;
        background-color: #DE8BBA;
        height: 35px;
        width: 95%;
        opacity: 0.5;
        
        
    }
    #inputMensages:hover {
        opacity: 1;
    }
    #enviarMsg {
        background-color: #DE8BBA;
        border-radius: 9px;
        cursor: pointer;
        opacity: 0.5;
    }
    #enviarMsg:hover {
        opacity: 1;
        
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