import React, {useState, useEffect} from 'react';
import styles from '../styles/singleAlgorithmPage.module.css'
import Comment from '../components/Comment';
import axios from 'axios';
import SortingVisualizer from '../components/SortingVisualizer/index'
import algo from '../algos/bubbleSort';

export default function SingleAlgorithmPage(props) {
  const [comments, setComments] = useState()
  const {algorithm} = props

  const getCommentData = () => {
    axios.get(`http://localhost:3001/comments/${algorithm.name}`)
    .then(res => {setComments(res.data)})
    .catch(console.log('whoops'))
  }

  useEffect(() => getCommentData(),[])

  return (
    <>
    <div className={styles.mainContainer}>
        <div className={styles.sortingContainer}>
                <SortingVisualizer algorithm={algorithm.function}/>
        </div>
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionCard}>
                <div className={styles.descriptionTitle}>
                    <h1>{algorithm.name}</h1>
                </div>
                <div className={styles.descriptionBody}>
                    <p>{algorithm.description}</p>
                </div>
            </div>
        </div>
            
        <div className={styles.codeContainer}>
            <div className={styles.codeCard}>
                <iframe frameBorder="0" width="100%" height="100%" src={algorithm.replitCode}></iframe>
            </div>
        </div>
            
        <div className={styles.commentsContainer}>
            {comments && <Comment comments={comments} currentAlgo={algorithm.name} getCommentData={getCommentData}/>}
        </div>

        <div className={styles.nextAlgoContainer}>
            <div className={styles.nextAlgoCard}>
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}
