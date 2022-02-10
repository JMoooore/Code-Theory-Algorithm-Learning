import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/algoCard.module.css'

export default function AlgoCard(props) {
    const {name, image, description, routeName} = props.algorithm
    const setSingleAlgo = props.setSingleAlgo
    const [isShown, setIsShown] = useState(false);
    
  return (
<>
<div className={styles.cardDiv}>
    <div className={styles.cardMain} 
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
        <Link to={`/algorithms/${routeName}`}><img className={styles.thumbnail} src={image} alt=''/></Link>
        <div className={styles.cardTitle}>{name}</div>
        {isShown && (
        <div className={styles.cardDescDiv}>
        <p className={styles.cardDesc}>{description}</p>
        </div>
      )}
    </div>
      
</div>
</>
)}
