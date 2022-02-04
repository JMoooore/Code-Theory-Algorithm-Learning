import React from 'react';
import styles from '../styles/algoCard.module.css'

export default function AlgoCard(props) {
  return (
<>
<div className={styles.cardDiv}>
    <div className={styles.cardMain}>
        <img className={styles.thumbnail} src='https://images.pexels.com/photos/422290/pexels-photo-422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        <div className={styles.cardTitle}>Title</div>
    </div>
    <div className={styles.cardDescDiv}>
        <p className={styles.cardDesc}>dkjf;akdjf djfkd fkjads;fkj df dfdkf dj dkjf;kdjf d;sfj dkjf;kadj;fkjd;oifj;kdjf;kad fkdj f  f dkjf df;dfjdfj;akdf;kdsfj;kad f d ffdsaf</p>
    </div>
</div>
</>
)}
