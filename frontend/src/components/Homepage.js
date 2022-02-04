import React from 'react';
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'; 
import '../styles/homepage.css';

export default function Homepage() {
  return (
    <>
    <div className="mainImage">
        <div className="mainInfo">  
        <h1 className="mainTitle">Title</h1>
        <p className="mainBody">The most recommended site to visualize algorithms</p>
        </div>
    </div>

    <div className="homeAdditional">
            <h1 className="homeAdditionalTitle">Learn and Explore!</h1>
        <div className="containerM">
            <div className="cardM">
            
                {/* <h1 className="titleM">Tools</h1> */}
                <p className="titleMinfo">Take the next step in your algorithm journey today.</p>
            
                <p><button className='btnM'>Explore</button></p>
            </div>
         </div>
     </div>

    <div className="homeAdditionalTwo">
        <div className="homeAdditionalTwoInfo">
            <h1 className="homeAdditionalTwoTitle">The importance of learning algorithms</h1>
            <p className="homeAdditionalTwobody">lorem</p>
        </div>
        
        <div className="homeAdditionalTwoImage"></div>  
    </div>

    <div className="homeAdditional">
            <h1 className="homeAdditionalTitle">Learn and Explore!</h1>
        <div className="containerM">
            <div className="cardM">
            
                {/* <h1 className="titleM">Tools</h1> */}
                <p className="titleMinfo">Take the next step in your algorithm journey today.</p>
            
                <p><button className='btnM'>Explore</button></p>
            </div>
         </div>
     </div>

    </>
  )
}
