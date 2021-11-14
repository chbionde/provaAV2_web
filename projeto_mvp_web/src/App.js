// import logo from './logo.svg';
import './App.css';

import Routes from './routes';

import {UsuarioProvider} from './context/user';

import './services/firebase';

import GlobalStyle from "./globalStyles";

function App() {
  return (
      <UsuarioProvider>
        <GlobalStyle/>
        <Routes/>
      </UsuarioProvider>
  );
}

export default App;
