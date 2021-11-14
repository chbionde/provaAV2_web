import React,{useContext,useState, useEffect} from "react";

import {UsuarioContext} from '../../context/user';

import firebaseApp from "../../services/firebase";

import { getFirestore, addDoc, collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
function Chat() {
    let cont = 0;
    const db = getFirestore(firebaseApp);

    const {user,signOut} = useContext(UsuarioContext);
    
    const [messages, setMessages] = useState([])

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
        try {
            await addDoc(collection(db,'mensagens'),{
                usuario: user.email,
                mensagem: document.querySelector("#inputMensages").value,
                lido: false,
                date: new Date().getTime()
            })
        } catch (err) {
            console.warn(err);
        }
    }
    return (
        <div>
            <div>
                <h1>
                    Chat {user? user.email :''}
                </h1>

                {messages.map((item)=>(
                    <p key={item.id}>Usuario: {item.usuario}<br/>{item.mensagem}</p>
                ))}
            </div>
            <div>
                <input id="inputMensages" type="text" placeholder="Menssagens"/>
            </div>
            <div>
                <button type="button" onClick={()=>{handleMessage()}}>
                    Enviar
                </button>
                <button type="button" onClick={()=>{signOut()}}>
                    Sair
                </button>
            </div>
        </div>
    )
}

export default Chat;