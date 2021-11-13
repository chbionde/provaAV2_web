import React from 'react';
import {Route as ReactDOMRoute, useHistory} from 'react-router-dom';

const Route = ({
    isPrivate = false,
    component: Component,
    ...rest  
})=>{

    const history = useHistory();

    const user = {
        username: 'carlos',
        id: 1
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