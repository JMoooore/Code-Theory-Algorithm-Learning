import React from "react"
import styles from '../styles/comment.module.css'
import trash from '../images/trash-can-solid.svg'
import axios from "axios"

export default function CommentItem(props) {
  const {first_name, last_name, content, created_at, id} = props.comment

  const timeDifference = () => {
    let timeFromDB = new Date(created_at)
    return timeFromDB.toLocaleDateString()
  }

  const handleDelete = (e, id) => {
    axios.delete(`http://localhost:3001/comments/${id}`)
    .then(res => props.setNewComment(res.data[0]))
    .catch(err => console.log(err))
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

        <div className={styles.commentTextContainer}>
          <p className={styles.commentText}>{content}</p>
        </div>

        <img className={styles.trashCan} src={trash} alt='' onClick={(e) => handleDelete(e, id)} id={id}/>
    </li>
  )
}
