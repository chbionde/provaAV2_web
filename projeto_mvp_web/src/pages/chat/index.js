import React,{useContext,useState} from "react";

import {UsuarioContext} from '../../context/user';

import firebaseApp from "../../services/firebase";

import { getFirestore, addDoc, collection } from "firebase/firestore";
function Chat() {
    
    const db = getFirestore(firebaseApp);

    const {user,signOut} = useContext(UsuarioContext);
    
    const [messages, setMessages] = useState([])

    async function handleMessage() {
        try {
            await addDoc(collection(db,'menssagens',{
                menssagens: "ola",
                lido: false
            }))
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <div>
            <h1>
                Chat {user? user.email :''}
            </h1>
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