import React from 'react';
import styles from '../styles/homepage.module.css'
import { Link } from 'react-router-dom'; 
import Video from '../videos/group_coding_vid.mp4'
import MainIconImg from '../images/mainicon.svg'


export default function Homepage() {
  return (
    <>
    
    <div className={styles.mainHomeContainer}>
        <div className={styles.mainHome}>
            <video autoPlay muted loop>
            <source src={Video} type="video/mp4"/>
            </video>
            <div className={styles.mainHomeContentWrapper}>
            <img className={styles.mainHomeTitleImg} src={MainIconImg}/>
            <div className={styles.mainHomeContent}>
                <h1 className={styles.mainHomeTitleContent}>Code Theory</h1>
                <p className={styles.mainHomeBodyContent}>Learning, Your Way</p>
                <br></br>
                <Link to='/algorithms'><button type="submit" className={styles.mainHomeBtn}>Explore</button></Link>
            </div>
            </div>
        </div>
    </div>
        
    
    <div className={styles.homeContainer}>
    <div className={styles.homeAdditional}>
            <h1 className={styles.homeAdditionalTitle}>For Your Information</h1>
        <div className={styles.containerM}>
            <div className={styles.cardM}>
                <p className={styles.titleMinfo}>Even if we're not conscious of it, we use algorithms all the time. Learning how to create algorithms not only lays a strong foundation in programming skills, but is also useful for developing logical thinking skills to write more dynamic computer code.</p>
                <Link to='/algorithms'><p><button className={styles.btnM}>Explore</button></p></Link>
            </div>
         </div>
     </div>

    <div className={styles.homeAdditionalTwo}>
        <div className={styles.homeAdditionalTwoInfo}>
            <h1 className={styles.homeAdditionalTwoTitle}>Why Learn Algorithms?</h1>
            <p className={styles.homeAdditionalTwobody}>Computer scientists and engineers design and implement algorithms to make specific jobs easier and faster to perform. Engineers use algorithms to sort through large sets of data, in order to find critical information more quickly. Google, in particular, engineered an algorithm which helps everyday people find specific information, quickly. Learning how valuable creating a sufficient algorithm can be for engineers, as well as the accuracy involved with algorithms, is extremely important for any student. On Code Theory you will visualize what some of those algorithms do.</p>
        </div>
    </div>
    

    <div className={styles.homeAdditional}>
            <h1 className={styles.homeAdditionalTitle}>Learn and Explore!</h1>
        <div className={styles.containerM}>
            <div className={styles.cardM}>
                <p className={styles.titleMinfo}>Take the next step in your algorithm journey today.</p>
                <Link to='/algorithms'><p><button className={styles.btnM}>Explore</button></p></Link>
            </div>
         </div>
     </div>
     </div>
    </>
  )
}
