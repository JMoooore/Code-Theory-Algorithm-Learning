import React, {useState} from 'react';
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom';  // used to render home


export default function Header(props) {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to='/'><div className={styles.logoImage}></div></Link> 
                <div>
                    <ul className={styles.headerList}>
                        <Link to="/algorithms"> <li className={styles.headerListItem}>Algorithms</li></Link>
                    </ul>
                </div>
            </div>
            <Link to='/login'>{props.user ? <div className={styles.headerLoginLink}>{props.user.first_name}</div> : <div className={styles.headerLoginLink}>Login</div> }</Link>

        </div>
    </>
)}
