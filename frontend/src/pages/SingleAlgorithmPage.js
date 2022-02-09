import React from 'react';
import styles from '../styles/singleAlgorithmPage.module.css'
import algorithmsArray from '../algos/index'

export default function SingleAlgorithmPage(props) {
  const algorithm = props.singleAlgo
  const next = algorithmsArray
const nextAlgo = (arr, name) => {
  for(let i = 0; i< arr.length; i++){
      if(i+1 > arr.length-1){
          return arr[0].image
      }
      if (arr[i].name === name){ 
          return arr[i + 1].image
      }
  }
}

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
                    <h1>{algorithm.name}</h1>
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
                <div><img src={nextAlgo(next, algorithm.name)}></img></div>
            </div>
        </div>
    </div>
    </>
  )
}
