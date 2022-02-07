import React from 'react';
import styles from '../styles/comment.module.css'
import CommentItem from './CommentItem';

// props to bring in -> user.id, user.first_name, user.last_name[0], comment.content, comment.created_at, comment.id

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