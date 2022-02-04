import React from 'react';
import styles from '../styles/algoCard.module.css'

export default function AlgoCard(props) {
  return (
<>
<div className={styles.cardDiv}>
    <div className={styles.cardMain}>
        <img className={styles.thumbnail} src={props.image}/>
        <div className={styles.cardTitle}>{props.title}</div>
    </div>
    <div className={styles.cardDescDiv}>
        <p className={styles.cardDesc}>{props.body}</p>
    </div>
</div>
</>
)}
