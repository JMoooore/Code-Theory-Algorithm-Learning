import React from 'react';
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <>
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                <Link to='/'><div className={styles.logoImage}></div></Link> 
                <div className={styles.authorsDiv}>
                    <div className={styles.authorsTitle}>Authors</div>
                    <div className={styles.authorsListDiv}>
                        <ul className={styles.footerAuthorList}>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/isaias-nuno-galindo/" target='_blank' rel='noopener noreferrer' >Isaias</a></li>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/fernando-curiel-moysen/" target='_blank' rel='noopener noreferrer' >Fernando</a></li>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/kevin-heleodoro/" target='_blank' rel='noopener noreferrer' >Kevin</a></li>
                        </ul>
                        <ul className={styles.footerAuthorList}>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/pmdevlin/" target='_blank' rel='noopener noreferrer' >Paul</a></li>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/nick-raffaele/" target='_blank' rel='noopener noreferrer' >Nick</a></li>
                            <li className={styles.footerAuthorItem}><a href="https://www.linkedin.com/in/john-ht-moore/" target='_blank' rel='noopener noreferrer' >John</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>About</li>
                    <li className={styles.footerListItem}>Terms</li>
                    <li className={styles.footerListItem}>Copyright</li>
                </ul>
            </div>
        </div>
      </>
  )
}
