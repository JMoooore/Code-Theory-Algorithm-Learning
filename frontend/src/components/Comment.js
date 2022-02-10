import React, { useState } from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';
import axios from 'axios';

export default function Comment(props){
  const [commentText, setCommentText] = useState('')
  const [commentId, setCommentId] = useState('')

  function handleSubmit(e){
    axios.post('http://localhost:3001/comments', {
      user_id: commentId,
      content: commentText,
      algorithm: props.currentAlgo
    })
    .then(res => {console.log(res)})
    .catch((err) => {console.log(err)})
    console.log(`${commentId} said ${commentText}`);
  }

  return (
    <ul className={styles.commentContainer}>
      
      <h1 className={styles.commentTitle}>Comments</h1>

      {/* Add comment form should only render if user is logged in, 
      else it should prompt user to login */}
      <form className={styles.commentForm}>
        <input id='newCommentId' className={styles.addCommentId} type="number" placeholder='valid ID' min="1" max="2" onChange={(e) => setCommentId(e.target.value)}></input> 

        <textarea id="newCommentContent" className={styles.addCommentTextarea} placeholder="Type your comment..." onChange={(e) => setCommentText(e.target.value)}></textarea>

        <button type="button" className={styles.addCommentButton}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >Submit Comment</button>
      </form>
      
      {props.comments.map(e => {
        return <CommentItem key={e.id} comment={e} />
      })}

    </ul>
  )
};