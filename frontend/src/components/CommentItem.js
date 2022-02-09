import React from "react"
import styles from '../styles/comment.module.css'

export default function CommentItem(props) {
  const {first_name, last_name, content, created_at} = props.comment

  const timeDifference = () => {
    let timeFromDB = new Date(created_at)
    return timeFromDB.toLocaleDateString()
  }

  return (
    <li className={styles.commentItem}>
        <div className={styles.commentPhotoContainer}>
            <img className={styles.commentPhoto} alt=''/> {/*props.comment.user_photo */}
        </div>
        <div className={styles.commentInfo}>
            <p className={styles.commentName}>{first_name} {last_name[0]}.</p>
            <span className={styles.commentTime}>{timeDifference()}</span>
        </div>
        <p className={styles.commentText}>{content}</p>
    </li>
  )
}
