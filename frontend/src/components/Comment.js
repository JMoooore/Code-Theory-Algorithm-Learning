import React, { useState } from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';
import axios from 'axios';

export default function Comment(props){
  const [commentText, setCommentText] = useState('')

  function handleSubmit(){
    axios.post('http://localhost:3001/comments', {
      user_id: props.currentUser.id,
      content: commentText,
      algorithm: props.currentAlgo
    })
    .then(res => {props.setNewComment(res.data[0])})
    .catch((err) => {console.log(err)})
  }


  return (
    <ul className={styles.commentContainer}>
      
      <h1 className={styles.commentTitle}>Comments</h1>

      {props.currentUser && <form className={styles.commentForm}>

        <textarea id="newCommentContent" className={styles.addCommentTextarea} placeholder="Type your comment..." onChange={(e) => setCommentText(e.target.value)}></textarea>

        <button type="button" className={styles.addCommentButton}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >Submit Comment</button>
      </form>}
      
      {props.comments.map(e => {
        return <CommentItem key={e.id} comment={e} setNewComment={props.setNewComment}/>
      })}

    </ul>
  )
};