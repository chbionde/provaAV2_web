import React,{useContext} from "react";

import {UsuarioContext} from '../../context/user';

function Chat() {
    
    const {user} = useContext(UsuarioContext);
    
    return (
        <div>
            <h1>
                Chat {user}
            </h1>
        </div>
    )
}

export default Chat;