import styles from './styles/Node.module.css';
const Node = props => {
    const { value, color ,pivot} = props;
    return (
        <div className={styles.container}>
            <p className={styles.value} style={{color: pivot ? 'red':'white'}}>{value}</p>
            <div
                className={styles.stick}
                style={{
                    height: value * 2.5,
                    backgroundColor: pivot ? 'red': color
                }}
            ></div>
        </div>
    );
};
export default Node;
