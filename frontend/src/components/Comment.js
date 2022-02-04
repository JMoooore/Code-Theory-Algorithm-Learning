import React from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';

// props to bring in -> user.id, user.first_name, user.last_name[0], comment.content, comment.created_at, comment.id

export default function Comment(props){
  return (
    <ul className={styles.commentContainer}>
      <h1 className={styles.commentTitle}>Comments</h1>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </ul>
  )
}