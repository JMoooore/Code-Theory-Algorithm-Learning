import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/algoCard.module.css'

export default function AlgoCard(props) {
    const {name, image, description} = props.algorithm
    const setSingleAlgo = props.setSingleAlgo
  return (
<>
<div className={styles.cardDiv}>
    <div className={styles.cardMain}>
        <Link to="/single_algo"><img className={styles.thumbnail} src={image} onClick={() => setSingleAlgo(props.algorithm)}/></Link>
        <div className={styles.cardTitle}>{name}</div>
    </div>
    <div className={styles.cardDescDiv}>
        <p className={styles.cardDesc}>{description}</p>
    </div>
</div>
</>
)}
