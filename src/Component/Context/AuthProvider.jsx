import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../Firebase.init";


const AuthProvider = ({ children }) => {

  const [user, Setuser] = useState(null)
 
  
  const users = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const UserLogin = (e, p) => {
    return signInWithEmailAndPassword(auth, e, p);
  };
  

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


      console.log("Current user inside useEffect : ", currentUser)

      Setuser(currentUser)

    })

    return () => {


      unsubscribe()

    }


  },[])

  const userInfo = {
    user,
    users,
    UserLogin,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
