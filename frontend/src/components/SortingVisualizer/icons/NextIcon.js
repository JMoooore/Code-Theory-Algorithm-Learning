import styles from '../styles/NextIcon.module.css';

const NextIcon = props => {
    const { height, width } = props;
    return (
        <span className={styles.container}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 104 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M81.5877 57.8452C85.4402 61.0441 85.4402 66.9559 81.5877 70.1548L35.3606 108.539C30.1474 112.868 22.25 109.161 22.25 102.384V25.6155C22.25 18.8394 30.1474 15.132 35.3606 19.4607L81.5877 57.8452Z"
                    fill="black"
                />
                <rect
                    x="89"
                    y="14"
                    width="15"
                    height="100"
                    rx="7.5"
                    fill="black"
                />
            </svg>
        </span>
    );
};

NextIcon.defaultProps = {
    height: '1em',
    width: '1em',
};

export default NextIcon;
