import React from 'react';
import styles from '../styles/singleAlgorithmpage.module.css'

export default function SingleAlgorithmpage() {
  return (
    <>
    <div className={styles.mainContainer}>
        <div className={styles.animationContainer}>
            <div className={styles.animationCard}>
                <div className={styles.animationItem}>Animation</div>
                <div className={styles.animationControls}></div>
            </div>
        </div>
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionCard}>
                <div className={styles.descriptionTitle}>
                <h1>Bubble Sort algorithm using JavaScript</h1>
                </div>
                <div className={styles.descriptionBody}>
                    <p>Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. Here order can be anything like increasing order or decreasing order.

                    How Bubble-sort works
                    We have an unsorted array arr = [ 1, 4, 2, 5, -2, 3 ] the task is to sort the array using bubble sort. 

                    Bubble sort compares the element from index 0 and if the 0th index is less than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens.

                    then, the 1st index compares to the 2nd index then the 2nd index compares to the 3rd, and so on…</p>
                </div>
            </div>
        </div>
            
        <div className={styles.codeContainer}>
            <div className={styles.codeCard}>Code</div>
        </div>
            
        <div className={styles.commentsContainer}>
            <div className={styles.commentsCard}>Comments</div>
        </div>

        <div className={styles.nextAlgoContainer}>
            <div className={styles.nextAlgoCard}>Next Algo</div>
        </div>
    </div>
    </>
  )
}
