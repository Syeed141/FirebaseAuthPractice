import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Firebase.init';

const AuthProvider = ({children}) => {


    const users = (email, pass) => {


        return createUserWithEmailAndPassword(auth,email,pass)


    }

    const userInfo = {

        users,

    }

    return (
       
        <AuthContext value={userInfo} >
             
             {children}

        </AuthContext>
    );
};

export default AuthProvider;

