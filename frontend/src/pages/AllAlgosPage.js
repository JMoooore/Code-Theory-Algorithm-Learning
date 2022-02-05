import React from 'react';
import styles from '../styles/allAlgos.module.css'
import AlgoCard from '../components/AlgoCard';

export default function AllAlgosPage() {
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
