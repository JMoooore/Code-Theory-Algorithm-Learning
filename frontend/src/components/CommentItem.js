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
            <p className={styles.commentName}>{props.user.first_name, props.user.last_name}</p>
            <span className={styles.commentTime}>{props.comment.created_at}</span>
        </div>
        <p className={styles.commentText}>{props.comment.content}</p>
    </li>
  )
}



// <div className={styles.commentPhotoContainer}>
//             <img className={styles.commentPhoto} alt=''/> {/*props.user.user_photo */}
//         </div>
//         <div className={styles.commentInfo}>
//             <p className={styles.commentName}>Anie Silverston {/* props.user.first_name, props.user.last_name[0] */}</p>
//             <span className={styles.commentTime}>4 hours ago {/* props.comment.created_at */}</span>
//         </div>
//         <p className={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor tincidunt, hendrerit enim at, imperdiet dui. Nullam porta eleifend bibendum. Sed ultricies convallis fermentum. Cras quam augue, auctor at faucibus at, tincidunt et massa. Morbi viverra augue nunc, a dignissim elit facilisis mattis. Aliquam ut dignissim nunc. Pellentesque sed lobortis dolor. Nulla ut ante volutpat sapien efficitur condimentum. Aenean volutpat gravida cursus. Cras sit amet lobortis augue. Phasellus luctus, nunc in ullamcorper iaculis, purus mauris imperdiet enim, vel euismod lorem turpis vel ligula. Sed id nisi sodales, ullamcorper tellus vel, laoreet purus. Donec tempor semper arcu, id tempus neque sagittis finibus. Phasellus viverra metus sed nisl efficitur euismod. Nam eu mi vehicula, cursus leo sit amet, eleifend mauris. {/* props.comment.content */}</p>