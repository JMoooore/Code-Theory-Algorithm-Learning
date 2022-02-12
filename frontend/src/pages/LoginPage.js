import React, { useState, useRef } from 'react';
import '../styles/loginPage.css'
import MainIconImg from '../images/mainicon.svg'
import { Link, useNavigate } from "react-router-dom";   //useHistory is different for v-6 it is useNavigate
import axios from 'axios';

export default function LoginPage(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const [errStyle, setErrStyle] = useState("hiddenErr"); 
    const changeErrStyle = () => {
        setErrStyle("shownErr");
        passwordRef.current.value = null
        emailRef.current.value = null
    };

    const [successLoginStyle, setSuccessLoginStyle] = useState("hiddenSuccessLogin"); 
    const [loginCardStyle, setSuccessLoginCardStyle] = useState("shownLoginCard"); 
    const changeSuccesLoginStyle = () => {
        if(errStyle === "shownErr") setErrStyle("hiddenErr")
        setSuccessLoginCardStyle("hiddenSuccessLoginCard")
        setSuccessLoginStyle("shownSuccessLogin");
    };
    
    const [displayEmail, setDisplayEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        axios.get(`http://localhost:3001/users`)
        .then(res => {
            for(let i=0; i<res.data.length; i++) {
                let current = res.data[i]
                if (current.email === emailRef.current.value && current.password === passwordRef.current.value) {
                    props.setUser(current)
                    setDisplayEmail(current.first_name)
                    changeSuccesLoginStyle()
                    setTimeout(() =>{
                        navigate('/algorithms')
                    }, 2000)
                }
            }
            changeErrStyle()
        })
        .catch(err => {console.log(err)})
    }

    return (
        <>
        <div className="mainLoginPageContainer">
            <h1 className={successLoginStyle}>Welcome Back {displayEmail}!</h1>
            <div className={loginCardStyle}>
                <img className="loginTitleImg" src={MainIconImg}/>
                <h1 className="loginTitle">Code Theory</h1>                        
                <div>
                    <p className={errStyle}>Invalid username and/or password</p>
                </div>                    
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <button type="submit" className="loginBtn">Login</button>
                </form>
                <div>or</div>
               <Link to="/signup"> <h1 className="signUpLink">Sign Up</h1></Link>
            </div>
        </div>
        </>
    )
}
