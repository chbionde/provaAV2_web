import React,{useContext} from "react";

import {UsuarioContext} from '../../context/user';

function Chat() {
    
    const {user,signOut} = useContext(UsuarioContext);
    
    return (
        <div>
            <h1>
                Chat {user?.email || ''}
            </h1>
            <button type="button" onClick={()=>{signOut()}}>
                Sair
            </button>
        </div>
    )
}

export default Chat;