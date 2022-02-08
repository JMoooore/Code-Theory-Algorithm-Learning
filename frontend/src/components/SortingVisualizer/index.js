import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/SortingVisualizer.module.css';
import sleep from '../../utils/sleep.js';
import randomData from '../../utils/randomData.js';
import Node from './Node.js';
import Slider from './Slider.js';

const SortingVisualizer = props => {
    const { algorithm } = props;

    const parseNodes = data => {
        return data.map(value => {
            return { value };
        });
    };

    const [data, setData] = useState(parseNodes(randomData(45, 5, 99)));
    const [dataSize, setDataSize] = useState(45);
    const [sizedData, setSizedData] = useState(data);
    const [iter, setIter] = useState();
    const [sorting, setSorting] = useState(false);

    let algoSpeed = useRef(1);

    const resizeData = () => {
        if (sorting) return;
        const sizedData = data.slice(0, dataSize);
        setSizedData(sizedData);
    };

    const randomizeData = () => {
        const newData = randomData(45, 5, 99);
        const newNodeData = parseNodes(newData);
        setIter();
        setData([...newNodeData]);
    };

    const sort = async iter => {
        setSorting(true);
        for (let data of iter) {
            await sleep(1000 / algoSpeed.current);
            setSizedData([...data]);
        }
        setIter()
        setSorting(false);
    };

    const handleSort = e => {
        if (sorting) return;
        let algoIter = iter;
        if (!algoIter) {
            const newIter = algorithm.function(sizedData);
            setIter(newIter);
            algoIter = newIter;
        }
        sort(algoIter);
    };

    useEffect(() => resizeData(), [data, dataSize]);

    return (
        <div className={styles.container}>
            <div className={styles.board}>
                {sizedData.map((node, index) => {
                    return (
                        <Node
                            value={node.value}
                            key={index}
                            color={node.color}
                        />
                    );
                })}
            </div>
            <div className={styles.controls}>
                <Slider
                    initialValue={20}
                    max={100}
                    min={1}
                    onChange={value => (algoSpeed.current = value)}
                />
                <Slider
                    onChange={setDataSize}
                    initialValue={45}
                    max={data.length}
                    min={10}
                    disabled={sorting}
                />
                <button onClick={handleSort} disabled={sorting}>
                    Sort!
                </button>
                <button onClick={randomizeData} disabled={sorting}>
                    RandomizeData
                </button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
