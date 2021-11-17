import styled from "styled-components";

export const TagAbout = styled.div`

    #conteiner_about{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top:10%;
        margin-left: auto;
        margin-right: auto;
        height:50vh;
         font-family: Verdana;
        flex-direction: column;
        background-color:#FFFFFF;
        border-radius: 10px;
        padding: 15px;
        width: 20vw;
        min-width: 350px;
        box-sizing: border-box;
        box-shadow: 5px 5px 10px rgba(0, 0, 0);

    }
    h1{ 
        text-shadow:#000 4px, 2px, 2px;  
        color: #ae1b73;
        text-shadow: 2px 1px #000;
        align-self:center;

    } 
     
    #botao{
        display:flex;
        justify-content: center;
        font-family: Verdana;
        color: #ae1b73;
        border: 1px solid #ae1b73;
        height: 50px;
        padding: 10px 50px;
        border-radius: 5px;
        font-size:20px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0,15);
        
       
    }
    #botao:hover{
        background-color:#ae1b73;
        color: #ffffff;
        font-size: 18px;
        margin-bottom: 1px;
        
    }
`;