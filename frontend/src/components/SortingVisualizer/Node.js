import styles from '../../styles/Node.module.css';
const Node = props => {
    const { value, color } = props;
    return (
        <div className={styles.container}>
            <p className={styles.value}>{value}</p>
            <div
                className={styles.stick}
                style={{
                    height: value * 2.5,
                    backgroundColor: color ?? 'white',
                }}
            ></div>
        </div>
    );
};
export default Node;
