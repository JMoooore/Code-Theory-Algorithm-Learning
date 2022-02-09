import styles from '../styles/PauseIcon.module.css';

const PlayIcon = props => {
    const { height, width } = props;
    return (
        <span className={styles.container}>
            <svg
                viewBox="0 0 65 96"
                height={height}
                width={width}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="20.2459" height="96" rx="10.123" fill="black" />
                <rect
                    x="44.7541"
                    width="20.2459"
                    height="96"
                    rx="10.123"
                    fill="black"
                />
            </svg>
        </span>
    );
};

PlayIcon.defaultProps = {
    height: '1em',
    width: '1em'
}

export default PlayIcon;
