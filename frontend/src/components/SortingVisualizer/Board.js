import styles from './styles/Board.module.css';
import Node from './Node.js';

const Board = props => {
    const { nodeData, size } = props;

    const nodes = nodeData.map((node, index) => (
        <Node value={node.value} key={index} color={node.color} pivot={node.pivot} />
    ));
    return <div className={styles.container}>{nodes}</div>;
};

Board.defaultProps = {
    nodeData: [],
}

export default Board;
