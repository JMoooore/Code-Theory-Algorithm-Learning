import React, { useState, useRef } from 'react';
import styles from '../styles/loginPage.module.css'; 
import MainIconImg from '../images/mainicon.svg'
import { Link, useNavigate } from "react-router-dom";   //useHistory is different for v-6 it is useNavigate



export default function LoginPage() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

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
    
const [loginError, setLoginError] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);

const loginErrMsg= () => {
    if(loggedIn === true) setLoggedIn(false)
    setLoginError(true);
  };
const loginSucess = () => {
    if(loginError === true) setLoginError(false)
    setLoggedIn(true)
}

async function handleSubmit(e) {
    e.preventDefault()
    const email = "email"
    const pass = "password"

    if (passwordRef.current.value !== pass || emailRef.current.value !== email) {
        loginErrMsg()
    } else {
        loginSucess()
        // history.push("/")
    } 
    passwordRef.current.value = null
    emailRef.current.value = null
  }


    return (
        <>
        <div className={styles.mainLoginPageContainer}>


            <div className={styles.loginWrapper}>
                <img className={styles.loginTitleImg} src={MainIconImg}/>
                <h1 className={styles.loginTitle}>Code Theory</h1>
                
                    {loginError && (
                        <div>
                            <p className={styles.loginErrorMsg}>Invalid username and/or password</p>
                        </div>
                    )}
                    {loggedIn && (
                        <div>
                            <p className={styles.loginSucessful}>Welcome Back!</p>
                        </div>
                    )}
                    
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div style={{ marginTop: 10 }}><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                </form>
                <div>or</div>
                <h1 className={styles.signUpLink}>Sign Up</h1>
            </div>

        </div>

        </>
    )
}
