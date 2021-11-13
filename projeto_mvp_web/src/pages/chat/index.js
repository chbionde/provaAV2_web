import React,{useContext,useState, useEffect} from "react";

import {UsuarioContext} from '../../context/user';

import firebaseApp from "../../services/firebase";

import { getFirestore, addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
function Chat() {
    
    const db = getFirestore(firebaseApp);

    const {user,signOut} = useContext(UsuarioContext);
    
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const unsub = onSnapshot(query(collection(db, "mensagens"),where("lido","!=",true)),(querySnapshot)=>{
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
                mensagem: "ola",
                lido: false
            })
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <div>
            <h1>
                Chat {user? user.email :''}
            </h1>

            {messages.map((item)=>(
                <p key={item.id}>{item.id}</p>
            ))}

            <button type="button" onClick={()=>{handleMessage()}}>
                Enviar
            </button>
            <button type="button" onClick={()=>{signOut()}}>
                Sair
            </button>
        </div>
    )
}

export default Chat;