import React, {useState, useEffect} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import firebaseApp from './firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth(firebaseApp)

const PrivateRoutes = () => {
    const [currentUser, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (userDB) => {
            if (userDB){
                setUser(userDB);
                return <Outlet/>
            } else{
                setUser(null);
                alert("No has iniciado sesion o no tienes una cuenta. Seras redirigido al registro");
                return <Navigate to="/registro"/>
            }
        });
    });
}

export default PrivateRoutes;