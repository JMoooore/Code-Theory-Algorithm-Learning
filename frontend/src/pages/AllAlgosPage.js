import React from 'react';
import styles from '../styles/allAlgos.module.css'
import AlgoCard from '../components/AlgoCard';
import algorithmsArray from '../algos/index'

export default function AllAlgosPage(props) {
  return (
      <>
        <div className={styles.backgroundAllAlgos}>
          <div className={styles.allCards}>
            {algorithmsArray.map((e,i) => {
              return <AlgoCard algorithm={algorithmsArray[i]} key={i} setSingleAlgo={props.setSingleAlgo}/>
            })}
          </div>
        </div>
      </>  
  )
}
