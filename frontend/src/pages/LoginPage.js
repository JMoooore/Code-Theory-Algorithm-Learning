import React, { useState, useRef } from 'react';
import styles from '../styles/loginPage.module.css'; 
import MainIconImg from '../images/mainicon.svg'
import { Link, useNavigate } from "react-router-dom";   //useHistory is different for v-6 it is useNavigate



export default function LoginPage() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //const history = useNavigate()

//     async function handleSubmit(e) {
//         e.preventDefault()

//         try {
//         setError("")
//         setLoading(true)
//         await login(emailRef.current.value, passwordRef.current.value)
//         history.push("/")
//         } catch {
//         setError("Failed to log in")
//     }

//     setLoading(false)
//   }

    return (
        <>
        <div className={styles.mainLoginPageContainer}>


            <div className={styles.loginWrapper}>
                <img className={styles.loginTitleImg} src={MainIconImg}/>
                <h1 className={styles.loginTitle}></h1>
                <form className={styles.loginForm}>
                    <div><input type="text" placeholder='Username' ref={emailRef} autoComplete="new-password"/></div>
                    <div style={{ marginTop: 10 }}><input type="password"placeholder='Password' ref={passwordRef}  autoComplete="new-password"/></div>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                
                </form>
            </div>

        </div>

        </>
    )
}
