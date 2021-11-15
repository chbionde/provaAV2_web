import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;

export const DivChat = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;

    #conteinerMSG {
        margin: 10px;
        background-color: #D9D7D8;
        border-radius: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        color: black;
    }
    
    #conteinerMSG #nameDate {
        display: flex;
        flex-direction: row;
    }
    #conteinerMSG .textoMsg {
        display: flex;
        flex-direction: row;
        margin-left: 15px;
        line-height: 0px;
    }
    #conteinerMSG #nameDate .userName{
        flex: 1;
        font-size: 18px;
        line-height: 0px;
    }
    #conteinerMSG #nameDate .sendDate{
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
        /* background-color: white; */
    }
`;