import React, { useState, useRef } from 'react';
import styles from '../styles/signupPage.module.css'
import MainIconImg from '../images/mainicon.svg'
import { Link, useNavigate } from "react-router-dom";   //useHistory is different for v-6 it is useNavigate
import axios from 'axios';

export default function SignupPage(props) {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const navigate = useNavigate()
    const [showErr, setShowErr] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [hideSignupCard, setHideSignupCard] = useState(false);
    const [firstName, setFirstName] = useState("")

    const changeSuccessSignup = () => {
        if(showErr) setShowErr(false)
        setShowWelcome(true)
        setHideSignupCard(true)
    };

    function handleCreateUser() {
        axios.post('http://localhost:3001/users', {
            email: emailRef.current.value,
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            password: passwordRef.current.value
        })
        .then(res => {props.setUser(res.data[0])})
        .catch((err) => {console.log(err);})
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
        if(!passwordRef.current.value ||
            !emailRef.current.value ||
            !lastNameRef.current.value ||
            !firstNameRef.current.value ||
            !confirmPasswordRef.current.value) {
            setShowErr(true)
        } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setShowErr(true)
        } else {
            handleCreateUser()
            setFirstName(firstNameRef.current.value)
            changeSuccessSignup()
            setTimeout(() =>{
                navigate('/algorithms')
            }, 2000)
        } 
        passwordRef.current.value = null
        emailRef.current.value = null
        firstNameRef.current.value = null
        lastNameRef.current.value = null
        confirmPasswordRef.current.value = null
    }

    return (
        <>
        <div className={styles.mainSignupPageContainer}>
            <h1 className={showWelcome ? styles.shownSignupWelcome : styles.hiddenSignupWelcome}>Welcome {firstName}!</h1>
            <div className={hideSignupCard ? styles.hiddenSuccessSignupCard : styles.shownSignupCard}>
                <img className={styles.signupTitleImg} src={MainIconImg}/>
                <h1 className={styles.signupTitle}>Code Theory</h1>  
                <div className={showErr ? styles.shownErr : styles.hiddenErr}><p>Whoops</p></div>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='First Name..' ref={firstNameRef} /></div>
                    <div><input type="text" placeholder='Last Name..' ref={lastNameRef} /></div>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <div><input type="password"placeholder='Confirm Password..' ref={confirmPasswordRef}  /></div>
                    <button type="submit" className={styles.signupBtn}>Create</button>
                </form>   
                <div>or</div>
                <Link to='/login'> <h1 className={styles.loginLink}>Login</h1></Link>
            </div>
        </div>
        </>
    )
}
