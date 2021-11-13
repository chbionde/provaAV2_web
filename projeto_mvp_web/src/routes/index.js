import React                    from "react";
import {BrowserRouter,Switch}   from "react-router-dom"

import Route                    from './route';

import About                    from '../pages/about'
import Chat                     from '../pages/chat'
import Home                     from '../pages/home'
import Login                    from '../pages/login'
import Pagina404                from '../pages/error'

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
          <Route component={Home}           path="/"        exact isPrivate />
          <Route component={Login}          path="/Login"                   />
          <Route component={Home}           path="/main"          isPrivate />
          <Route component={Chat}           path="/Chat"          isPrivate />
          <Route component={About}          path="/About"         isPrivate />
          <Route component={Pagina404}      path="*"              isPrivate />
        </Switch>
       </BrowserRouter>
    )
}

export default Routes;