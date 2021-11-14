import React, {createContext, useState, useEffect} from "react";

import '../services/firebase';

// pegando os dados de funções immportadas do firebase
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as signOutFirebase, onAuthStateChanged as fofoqueiro} from 'firebase/auth';

const auth = getAuth();

const UsuarioContext = createContext({});
const UsuarioProvider = ({children}) => {
    
    const [user,setUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fofoqueiro(auth, async (useState) => {
            setUser(useState);
            setLoading(false);
        })
    },[]);

    const signIn = async (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(resp => {
            console.warn(resp);
        }).catch(err => {
            console.warn(err);
        })
    };
    const signOut = async () => {
        signOutFirebase(auth)
        .then(resp => {
            console.warn('deslogado');
        }).catch(err => {
            console.warn(err);
        })
    }; 
    const signUp = async (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(resp => {
            console.warn('reslizado');
        }).catch(err => {
            console.warn(err);
        })
    }; 

    return (
        <UsuarioContext.Provider value={{user, loading, signIn, signOut, signUp}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioProvider};