import React from 'react';
import styles from '../styles/singleAlgorithmpage.module.css'

export default function SingleAlgorithmpage(props) {
  const {algorithm} = props
  return (
    <>
    <div className={styles.mainContainer}>
        <div className={styles.animationContainer}>
            <div className={styles.animationCard}>
                <div className={styles.animationItem}></div>
                <div className={styles.animationControls}></div>
            </div>
        </div>
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionCard}>
                <div className={styles.descriptionTitle}>
                    <h1>{algorithm.title}</h1>
                </div>
                <div className={styles.descriptionBody}>
                    <p>{algorithm.description}</p>
                </div>
            </div>
        </div>
            
        <div className={styles.codeContainer}>
            <div className={styles.codeCard}>
                <div></div>
            </div>
        </div>
            
        <div className={styles.commentsContainer}>
            <div className={styles.commentsCard}>
                <div></div>
            </div>
        </div>

        <div className={styles.nextAlgoContainer}>
            <div className={styles.nextAlgoCard}>
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}
