import React, { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase-config";

const UserContex = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const addUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return() => {
            unsubscribe();
        }
    })

    return(
        <UserContex.Provider value={{addUser, user, signin, logout}}>
            {children}
        </UserContex.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContex)
}