import React from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';

export default function Comment(props){
  return (
    <ul className={styles.commentContainer}>
      <h1 className={styles.commentTitle}>Comments</h1>
      <form className={styles.comment}>
        <textarea></textarea>
      </form>
      {props.comments.map(e => {
        return <CommentItem comment={e} user={props.users.filter((a) => {
          return a.id === e.user_id ? a : null;
          }
          )}/>
      })}
    </ul>
  )
}