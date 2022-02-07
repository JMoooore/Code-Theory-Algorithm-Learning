import { useState } from 'react';
import styles from '../../styles/SortingVisualizer.module.css';
import Node from './Node.js';
import Slider from './Slider.js';
const SortingVisualizer = props => {
    const { data } = props;
    const nodeData = data.map(value => {
        return { value: value };
    });

    const [sizedData, setSizedData] = useState(nodeData);

    const resizeData = size => {
        const sizedData = nodeData.slice(0, size);
        setSizedData(sizedData);
    };
    const handleSort = e => {};
    return (
        <div className={styles.container}>
            <div className={styles.board}>
                {sizedData.map((node, index) => {
                    return <Node value={node.value} key={index} />;
                })}
            </div>
            <div className={styles.controls}>
                <Slider onChange={resizeData} max={data.length} min={10} />
                <button onClick={handleSort}>Sort!</button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
