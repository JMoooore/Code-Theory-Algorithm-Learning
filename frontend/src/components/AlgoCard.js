import React from 'react';
import styles from '../styles/algoCard.module.css'

export default function AlgoCard(props) {
    const {name, image, description} = props.algorithm
  return (
<>
<div className={styles.cardDiv}>
    <div className={styles.cardMain}>
        <img className={styles.thumbnail} src={image}/>
        <div className={styles.cardTitle}>{name}</div>
    </div>
    <div className={styles.cardDescDiv}>
        <p className={styles.cardDesc}>{description}</p>
    </div>
</div>
</>
)}
