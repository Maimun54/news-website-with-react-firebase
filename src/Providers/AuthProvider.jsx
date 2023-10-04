import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

 export const AuthContext= createContext(null)

 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    // to fixed lodding issue 
    const [lodding,setLodding]=useState(true)

    const createUser =(email,password)=>{
        setLodding(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn =(email,password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLodding(true)
        return signOut(auth)
    }
    useEffect(()=>{
           const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            console.log('hello',currentUser)
            setUser(currentUser)
            setLodding(false)
           })
           return ()=>{
            unSubscribe()
           }
    },[])
    const authInfo ={
        user,
        createUser,
        logOut,
        SignIn,
        lodding
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;