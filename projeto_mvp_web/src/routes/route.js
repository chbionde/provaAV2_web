import React,{useContext} from 'react';
import {Route as ReactDOMRoute, useHistory} from 'react-router-dom';
import { UsuarioContext } from "../context/user";

const Route = ({
    isPrivate = false,
    component: Component,
    ...rest  
})=>{
    const {user,loading} = useContext(UsuarioContext);
    const history = useHistory();

    if (loading) {
        return (
            <div>
                <p>
                    Carregando...
                </p>
            </div>
        )
    }

    if (!(isPrivate === !!user)) {
        history.push(isPrivate ? '/login':'/main');
    }
    
    return(
        <ReactDOMRoute {...rest}
        render={(props)=>{
          return (
              <Component {...props}/>
          )  
        }}
        />
    )
}
export default Route;