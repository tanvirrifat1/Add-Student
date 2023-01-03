import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut,
} from 'firebase/auth'
import app from '../firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider()


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const verify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        userLogin,
        logOut,
        verify,
        GoogleLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;