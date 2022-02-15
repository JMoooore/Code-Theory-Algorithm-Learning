import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/algoCard.module.css';

export default function AlgoCard(props) {
    const { name, image, description, routeName } = props.algorithm;

    return (
        <>
            <Link to={`/algorithms/${routeName}`}>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="" />
                    <div classNname={styles.description}>
                        <h2 className={styles.title}>{name}</h2>
                        {description}
                    </div>
                </div>
            </Link>
        </>
    );
}
