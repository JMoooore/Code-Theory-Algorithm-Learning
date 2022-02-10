import React from 'react';
import styles from '../styles/allAlgos.module.css'
import AlgoCard from '../components/AlgoCard';
import algos from '../algos/index'

export default function AllAlgosPage(props) {
  return (
      <>
        <div className={styles.backgroundAllAlgos}>
          <div className={styles.allCards}>
            {Object.values(algos).map((algo,index) => {
              return <AlgoCard algorithm={algo} key={index} />
            })}
          </div>
        </div>
      </>  
  )
}
