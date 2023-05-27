import React from "react";
import { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const LoginForm = () => {


    const login = async () => {
        const email = "1234@gmail.com"
        const password = "123456"

        const auth = getAuth()

        try{
            const res = await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully");
            console.log(res.user);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        login()
    }, [])

    return(
        null
    )
};