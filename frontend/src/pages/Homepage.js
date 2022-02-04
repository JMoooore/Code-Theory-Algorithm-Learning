import React from 'react';
import styles from '../styles/homepage.module.css'
import { Link } from 'react-router-dom'; 

export default function Homepage() {
  return (
    <>
    <div className={styles.mainImage}>
        <div className={styles.mainInfo}>  
        <h1 className={styles.mainTitle}>Title</h1>
        <p className={styles.mainBody}>The most recommended site to visualize algorithms</p>
        </div>
    </div>

    <div className={styles.homeAdditional}>
            <h1 className={styles.homeAdditionalTitle}>Filler info</h1>
        <div className={styles.containerM}>
            <div className={styles.cardM}>
                <p className={styles.titleMinfo}>lorem lorem loreml oremlorem lore mlorem loremloremlo remloremloremlorem</p>
                <p><button className={styles.btnM}>Explore</button></p>
            </div>
         </div>
     </div>

    <div className={styles.homeAdditionalTwo}>
        <div className={styles.homeAdditionalTwoInfo}>
            <h1 className={styles.homeAdditionalTwoTitle}>The importance of learning algorithms</h1>
            <p className={styles.homeAdditionalTwobody}>lorem</p>
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

    </>
  )
}
