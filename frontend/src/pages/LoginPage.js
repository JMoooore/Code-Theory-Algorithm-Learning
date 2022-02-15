import React, { useState, useRef } from 'react';
import styles from '../styles/loginPage.module.css'
import MainIconImg from '../images/mainicon.svg'
import { Link, useNavigate } from "react-router-dom";   //useHistory is different for v-6 it is useNavigate
import axios from 'axios';

export default function LoginPage(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [showErr, setShowErr] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [hideLoginCard, setHideLoginCard] = useState(false)
    const [displayName, setDisplayName] = useState("")

    const changeSuccesLogin = () => {
        if(showErr) setShowErr(false)
        setHideLoginCard(true)
        setShowWelcome(true)
    };
    
    async function handleSubmit(e) {
        e.preventDefault()
        axios.get(`http://localhost:3001/users`)
        .then(res => {
            for(let i=0; i<res.data.length; i++) {
                let current = res.data[i]
                if (current.email === emailRef.current.value && current.password === passwordRef.current.value) {
                    props.setUser(current)
                    setDisplayName(current.first_name)
                    changeSuccesLogin()
                    setShowErr(false)
                    setTimeout(() =>{
                        navigate('/algorithms')
                    }, 2000)
                } else {
                    setShowErr(true)
                }
            }
        })
        .catch(err => {console.log(err)})
    }

    return (
        <>
        <div className={styles.mainLoginPageContainer}>
            <h1 className={showWelcome ? styles.shownSuccessLogin : styles.hiddenSuccessLogin}>Welcome Back {displayName}</h1>   
            <div className={hideLoginCard ? styles.hiddenSuccessLoginCard :  styles.shownLoginCard }>
                <img className={styles.loginTitleImg} src={MainIconImg}/>
                <h1 className={styles.loginTitle}>Code Theory</h1>                        
                <h1 className={showErr ? styles.shownErr : styles.hiddenErr}>Invalid username and/or password</h1>                
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                </form>
                <div>or</div>
               <Link to="/signup"> <h1 className={styles.signUpLink}>Sign Up</h1></Link>
            </div>
        </div>
        </>
    )
}
