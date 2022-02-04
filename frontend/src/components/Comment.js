import React from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';

export default function Comment(props){
  function clickHandler(e){
    // Route this to a POST request through App
    e.preventDefault()
    console.log(e.target);
  }

  return (
    <ul className={styles.commentContainer}>
      <h1 className={styles.commentTitle}>Comments</h1>
      {/* Add comment form should only render if user is logged in, 
      else it should prompt user to login */}
      <form className={styles.commentForm}>
        <textarea className={styles.addCommentTextarea}></textarea>
        <button 
          className={styles.addCommentButton}
          onClick={(e) => clickHandler(e)}
        >Submit Comment</button>
      </form>
      {props.comments.map(e => {
<<<<<<< HEAD
        return <CommentItem key={e.id} comment={e} user={props.users.filter((a) => {
          return a.id === e.user_id ? a : null;
=======
        return <CommentItem comment={e} user={props.users.filter(a => {
          if(a.id === e.user_id) {
            return a;
          }
>>>>>>> afe944b (Error on matching dummy user to dummy comment)
          })}/>
      })}
    </ul>
  )
}