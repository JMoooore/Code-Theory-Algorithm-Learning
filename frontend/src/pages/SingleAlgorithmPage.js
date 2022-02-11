import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../styles/singleAlgorithmPage.module.css';
import Comment from '../components/Comment';
import axios from 'axios';
import SortingVisualizer from '../components/SortingVisualizer/index';
import { Grid, Row, Col } from '../components/GridRow';
import algoObj from '../algos/index'

export default function SingleAlgorithmPage(props) {
  const [comments, setComments] = useState()
  const [newComment, setNewComment] = useState()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  const {algorithm} = props

  const next = (obj) => {
      for(let key in obj){
          if(key !== algorithm.routeName){
              return obj[key]
          }
      }
  }

  const getCommentData = () => {
    axios.get(`http://localhost:3001/comments/${algorithm.name}`)
    .then(res => {setComments(res.data)})
    .catch(err => {console.log(err)})
  }

  useEffect(() => getCommentData(),[newComment])

  return (
    <>
    <Grid>
      <Row>
        <Col size={1}>
            <h1 className={styles.algoTitle}>{algorithm.name}</h1>
            <div className={styles.sortingContainer}>
            <SortingVisualizer algorithm={algorithm.function}/>
          </div>
        </Col>
      </Row>

      <Row height={'60em'}>
        
        <Col size={1}>
          <div className={styles.codeContainer}>
            <div className={styles.codeCard}>
                <iframe title={algorithm.name} frameBorder="0" width="100%" height="100%" src={algorithm.replitCode}></iframe>
            </div>
          </div>
        </Col>

        <Col size={1}>
          <div className={styles.descriptionContainer}>
              <div className={styles.descriptionCard}>
              
                  <div className={styles.descriptionTitle}>
                      <h1>How It Works</h1>
                  </div>

                  <div className={styles.descriptionBody}>
                      <p>{algorithm.explanation}</p>
                      <br/>
                      <p>{algorithm.complexity}</p>
                  </div>
              <div className={styles.nextAlgoContainer}>
                <div className={styles.nextAlgoCard}>
                <Link to={`/algorithms/${(next(algoObj)).routeName}`}><img onClick={scrollToTop} className={styles.NextImg} src={(next(algoObj)).image} alt=''/></Link>
                </div>
              </div>
              </div>
          </div>
        </Col>
      </Row>

      <Row marginTop={'3rem'}>
        <Col size={1}>
          <div className={styles.commentsContainer}>
              {comments && <Comment comments={comments} currentAlgo={algorithm.name} getCommentData={getCommentData} setNewComment={setNewComment}/>}
          </div>
        </Col>
      </Row>

    </Grid>
    </>
  )
}
