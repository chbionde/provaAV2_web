import React,{useContext,useState, useEffect} from "react";

import {UsuarioContext} from '../../context/user';

import firebaseApp from "../../services/firebase";

import { getFirestore, addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";

import {  
    Main,
    DivChat,
    UserChat,
    Msg,
} from "./styles";

function Chat() {
    let cont = 0;
    const db = getFirestore(firebaseApp);

    const {user,signOut} = useContext(UsuarioContext);
    
    const [messages, setMessages] = useState([])

    let dateTimeMsg, dateTime;
    
    useEffect(()=>{
        const unsub = onSnapshot(query(collection(db, "mensagens"),orderBy("date","asc")),(querySnapshot)=>{
            const tmp = [];
            
            querySnapshot.forEach(async (document)=> {
                tmp.push({
                    id: document.id,
                    ...document.data()
                })
            })
            setMessages(tmp)
        });
        
        return ()=> {
            unsub()
        }
        
    },[])

    async function handleMessage() {
        dateTime = new Date();
        dateTimeMsg = (dateTime.getDate()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getFullYear()+" "+dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds()).toString();

        try {
            await addDoc(collection(db,'mensagens'),{
                usuario: user.email,
                mensagem: document.querySelector("#inputMensages").value,
                lido: false,
                date: new Date().getTime(),
                dateStr:dateTimeMsg
            })
        } catch (err) {
            console.warn(err);
        }
    }
    if (messages.length > 0) {
        console.log('==================>',messages);
        console.log('==================>',new Date(messages[0].date));
    }
    return (
        <Main>
            <DivChat>
                <h1>
                    Chat {user? user.email :''}
                </h1>
                {messages.map((item)=>(
                    <div id="conteinerMSG">
                        <div id="nameDate">
                            <p key={item.id} class="userName">
                                {item.usuario.split("@")[0]}
                            </p>
                            <p key={item.id} class="sendDate"> 
                                {item.dateStr}
                            </p>
                        </div>
                        <p key={item.id} class="textoMsg"> 
                            {item.mensagem}
                        </p>
                    </div>
                ))}
            </DivChat>
            <UserChat>
                <input id="inputMensages" type="text" placeholder="Menssagens"/>
                <button id="enviarMsg" type="button" onClick={()=>{handleMessage()}}>
                    <img src="/images/send_message.png" width="35px"/>
                </button>
            </UserChat>
            <div>
                <button type="button" onClick={()=>{signOut()}}>
                    Sair
                </button>
            </div>
        </Main>
    )
}

export default Chat;