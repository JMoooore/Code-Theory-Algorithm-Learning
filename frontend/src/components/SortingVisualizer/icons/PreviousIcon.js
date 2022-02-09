import styles from '../styles/PreviousIcon.module.css';

const PreviousIcon = props => {
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
                    d="M22.4123 70.1548C18.5598 66.9559 18.5598 61.0441 22.4123 57.8452L68.6394 19.4607C73.8526 15.132 81.75 18.8394 81.75 25.6155V102.384C81.75 109.161 73.8526 112.868 68.6394 108.539L22.4123 70.1548Z"
                    fill="black"
                />
                <rect
                    x="15"
                    y="114"
                    width="15"
                    height="100"
                    rx="7.5"
                    transform="rotate(-180 15 114)"
                    fill="black"
                />
            </svg>
        </span>
    );
};

PreviousIcon.defaultProps = {
    height: '1em',
    width: '1em',
};

export default PreviousIcon;
