import React from "react"
import styles from '../styles/comment.module.css'

export default function CommentItem(props) {

  return (
    <li className={styles.commentItem}>
    {console.log(props.users)}
        <div className={styles.commentPhotoContainer}>
            <img className={styles.commentPhoto} alt=''/> {/*props.user.user_photo */}
        </div>
        <div className={styles.commentInfo}>
            <p className={styles.commentName}>{props.user[0].first_name} {props.user[0].last_name[0]}.</p>
            <span className={styles.commentTime}>{props.comment.created_at}</span>
        </div>
        <p className={styles.commentText}>{props.comment.content}</p>
    </li>
  )
}
