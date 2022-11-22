import React, { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase-config";

const UserContex = createContext();

export const AuthContextProvider = ({children}) => {
    const addUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    return(
        <UserContex.Provider value={{addUser}}>
            {children}
        </UserContex.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContex)
}