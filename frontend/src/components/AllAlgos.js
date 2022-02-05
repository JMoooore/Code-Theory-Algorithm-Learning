import React from 'react';
import styles from '../styles/allAlgos.module.css'
import AlgoCard from './AlgoCard';

export default function AllAlgos() {
  return (
      <>
        <div className={styles.backgroundAllAlgos}>
          <div className={styles.allCards}>
            <AlgoCard/>
          </div>
        </div>
      </>  
  )
}
