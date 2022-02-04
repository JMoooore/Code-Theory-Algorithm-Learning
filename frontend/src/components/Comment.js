import React from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';

// props to bring in -> user.id, user.first_name, user.last_name[0], comment.content, comment.created_at, comment.id

export default function Comment(props){
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentTitle}>
        <h1>Comments</h1>
      </div>

      <div className={styles.commentBody}>
        <CommentItem />
      </div>

    </div>
  )
}