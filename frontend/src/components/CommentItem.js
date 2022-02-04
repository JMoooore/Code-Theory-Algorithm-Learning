import React from "react"
import styles from '../styles/comment.module.css'

// props to bring in -> user.id, user.first_name, user.last_name[0], comment.content, comment.created_at, comment.id

export default function CommentItem(props) {
  return (
    <li className={styles.commentItem}>
        <div className={styles.commentPhotoContainer}>
            <img className={styles.commentPhoto} alt=''/>
        </div>
        <div className={styles.commentInfo}>
            <p className={styles.commentName}>Anie Silverston</p>
            <span className={styles.commentTime}>4 hours ago</span>
        </div>
        <p className={styles.commentText}>Suspendisse gravida sem?</p>
    </li>
  )
}