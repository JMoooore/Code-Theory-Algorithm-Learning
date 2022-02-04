import React from "react"
import styles from '../styles/comment.module.css'

// props to bring in -> user.id, user.first_name, user.last_name[0], comment.content, comment.created_at, comment.id

export default function CommentItem(props) {
  return (
    <div className={styles.commentItem}>
      <div className={styles.commentPhoto}></div>
      <div className={styles.commentName}> Mike Jones </div>
      <div className={styles.commentText}>This is such a great algorithm</div>
    </div>
  )
}