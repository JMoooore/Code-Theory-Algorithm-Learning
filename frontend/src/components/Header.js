import React from 'react';
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom';  // used to render home

export default function Header() {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to='/'><div className={styles.logoImage}></div></Link> 
                <div>
                    <ul className={styles.headerList}>
                        <Link to="/algorithms_page"> <li className={styles.headerListItem}>Algorithms</li></Link>
                    </ul>
                </div>
            </div>
            <div>
                <ul className={styles.headerList}>
                    <li className={styles.headerListItem}>Login</li>
                    <li className={styles.headerListItem}>Sign up</li>
                </ul>
            </div>
        </div>
    </>
)}
