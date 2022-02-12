import React, { useState, useRef } from 'react';
import '../styles/signupPage.css'
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

    const [errStyle, setErrStyle] = useState("hiddenErr"); 
    const changeErrStyle = () => {
        setErrStyle("shownErr");
    };

    const [successsignupStyle, setSuccessSignupStyle] = useState("hiddenSuccesssignup"); 
    const [signupCardStyle, setSuccessSignupCardStyle] = useState("shownsignupCard"); 
    const changeSuccessSignupStyle = () => {
        if(errStyle === "shownErr") setErrStyle("hiddenErr")
        setSuccessSignupCardStyle("hiddenSuccesssignupCard")
        setSuccessSignupStyle("shownSuccesssignup");
    };

    const [firstName, setFirstName] = useState("")

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
            changeErrStyle()
        } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            changeErrStyle()
        } else {
            handleCreateUser()
            setFirstName(firstNameRef.current.value)
            changeSuccessSignupStyle()
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
        <div className="mainsignupPageContainer">
            <h1 className={successsignupStyle}>Welcome {firstName}!</h1>
            <div className={signupCardStyle}>
                <img className="signupTitleImg" src={MainIconImg}/>
                <h1 className="signupTitle">Code Theory</h1>                        
                <div>
                    <p className={errStyle}>Whoops</p>
                </div>                    
                <form className="signupForm" onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='First Name..' ref={firstNameRef} /></div>
                    <div><input type="text" placeholder='Last Name..' ref={lastNameRef} /></div>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <div><input type="password"placeholder='Confirm Password..' ref={confirmPasswordRef}  /></div>
                    <button type="submit" className="signupBtn">Create</button>
                </form>   
                <div>or</div>
                <Link to='/login'> <h1 className="loginLink">Login</h1></Link>
            </div>
        </div>
        </>
    )
}
