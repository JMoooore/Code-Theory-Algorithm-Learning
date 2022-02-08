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
    const [sorting, setSorting] = useState(false);

    let algoSpeed = useRef(20);
    let frames = useRef();
    let frameIndex = useRef(0);
    let playing = useRef(false);

    const resizeData = () => {
        if (sorting) return;
        const sizedData = data.slice(0, dataSize);
        setSizedData(sizedData);
    };

    const randomizeData = async () => {
        playing.current = false 
        const newData = randomData(45, 5, 99);
        const newNodeData = parseNodes(newData);
        frames.current = 0;
        setData(newNodeData);
        
    };

    const generateFrames = data => {
        const newIter = algorithm.function(data);
      console.log(data);
        const frames = [];

        for (let data of newIter) {
            frames.push([...data]);
        }
        return frames;
    };

    const handlePause = () => (playing.current = false);
    const handlePlay = async () => {
        if (playing.current) return;
        playing.current = true;

        if (!frames.current) {
            frames.current = generateFrames(sizedData);
        }
        console.log(frames);

        while (frameIndex.current < frames.current.length && playing.current) {
            await sleep(10);
            console.log(frameIndex);
            setSizedData(frames.current[frameIndex.current]);
            frameIndex.current += 1;
        }
        playing.current = false;
    };
    const handleForward = () => {
        if (!frames.current) frames.current = generateFrames(sizedData);
        if (playing.current) return;
        if(frameIndex.current === 0){
            setSizedData(frames.current[frameIndex.current]);
            frameIndex.current += 1;
            return
        }
        frameIndex.current += 1;
        setSizedData(frames.current[frameIndex.current]);
    };

    const handleBackward = () => {
        if (playing.current) return;
        if (frameIndex.current === 0) return;
        frameIndex.current -= 1;
        setSizedData(frames.current[frameIndex.current]);
    };

    useEffect(() => {resizeData()}, [data, dataSize]);

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
                <button onClick={randomizeData} disabled={sorting.current}>
                    RandomizeData
                </button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handleForward}>Forward</button>
                <button onClick={handleBackward}>Backward</button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
