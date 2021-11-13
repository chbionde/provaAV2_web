// import logo from './logo.svg';
import './App.css';

import Routes from './routes';

import {UsuarioProvider} from './context/user';

import './services/firebase';

function App() {
  return (
      <UsuarioProvider>
        <Routes/>
      </UsuarioProvider>
  );
}

export default App;
