import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../Firebase.init";

const AuthProvider = ({ children }) => {
  const users = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const UserLogin = (e, p) => {
    return signInWithEmailAndPassword(auth, e, p);
  };

  const userInfo = {
    users,
    UserLogin,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
