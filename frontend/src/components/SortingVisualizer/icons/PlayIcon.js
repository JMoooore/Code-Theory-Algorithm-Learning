import styles from '../styles/PlayIcon.module.css';

const PlayIcon = (props) => {
    const {height ,width} = props
    return (
        <span className={styles.container}>
            <svg
                viewBox="0 0 65 100"
                fill="none"
                height={height}
                width={width}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className={styles.icon}
                    d="M62.3673 46.1532C64.7751 48.1526 64.7751 51.8474 62.3673 53.8468L8.44414 98.6217C5.1859 101.327 0.25 99.01 0.25 94.7749V5.22509C0.25 0.990032 5.18589 -1.32712 8.44414 1.37835L62.3673 46.1532Z"
                />
            </svg>
        </span>
    );
};

PlayIcon.defaultProps = {
    height: '1em',
    width: '1em'
}

export default PlayIcon
