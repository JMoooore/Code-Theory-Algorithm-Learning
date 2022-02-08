import React from 'react';
import styles from '../styles/homepage.module.css'
import { Link } from 'react-router-dom'; 

export default function Homepage() {
  return (
    <>
    <div className={styles.mainImage}>
        <div className={styles.mainInfo}>  
        <h1 className={styles.mainTitle}>Code Theory</h1>
        <p className={styles.mainBody}>"The most recommended site to visualize algorithms"</p>
        </div>
    </div>
    <div className={styles.homeContainer}>
    <div className={styles.homeAdditional}>
            <h1 className={styles.homeAdditionalTitle}>For Your Information</h1>
        <div className={styles.containerM}>
            <div className={styles.cardM}>
                <p className={styles.titleMinfo}>Even if we're not conscious of it, we use algorithms all the time. Learning how to create algorithms not only lays a strong foundation in programming skills, but is also useful for developing logical thinking skills to write more dynamic computer code.</p>
                <p><button className={styles.btnM}>Explore</button></p>
            </div>
         </div>
     </div>

    <div className={styles.homeAdditionalTwo}>
        <div className={styles.homeAdditionalTwoInfo}>
            <h1 className={styles.homeAdditionalTwoTitle}>Why Learn Algorithms?</h1>
            <p className={styles.homeAdditionalTwobody}>Computer scientists and engineers design and implement algorithms to make specific jobs easier and faster to perform. Engineers use algorithms to sort through large sets of data, in order to find critical information more quickly. Google, in particular, engineered an algorithm which helps everyday people find specific information, quickly. Learning how valuable creating a sufficient algorithm can be for engineers, as well as the accuracy involved with algorithms, is extremely important for any student. On Code Theory you will visualize what some of those algorithms do.</p>
        </div>
        
        <div className={styles.homeAdditionalTwoImage}></div>  
    </div>
    

    <div className={styles.homeAdditional}>
            <h1 className={styles.homeAdditionalTitle}>Learn and Explore!</h1>
        <div className={styles.containerM}>
            <div className={styles.cardM}>
                <p className={styles.titleMinfo}>Take the next step in your algorithm journey today.</p>
                <p><button className={styles.btnM}>Explore</button></p>
            </div>
         </div>
     </div>
     </div>
    </>
  )
}
