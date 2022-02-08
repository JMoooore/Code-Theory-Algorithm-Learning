import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/SortingVisualizer.module.css';
import sleep from '../../utils/sleep.js';
import { randomNodes } from '../../utils/randomData.js';
import Node from './Node.js';
import Board from './Board.js';
import Slider from './Slider.js';

const SortingVisualizer = props => {
    const { algorithm } = props;

    const [data, setData] = useState(randomNodes(45, 5, 99));
    const [dataSize, setDataSize] = useState(45);
    let [sizedData, setSizedData] = useState(data);
    const [sorting, setSorting] = useState(false);

    let algoSpeed = useRef(20);
    let frames = useRef([]);
    let frameIndex = useRef(null);
    let playing = useRef(false);

    const resizeData = () => {
        if (sorting) return;
        const resizedData = data.slice(0, dataSize);
        setSizedData(resizedData);
    };

    const randomizeData = () => {
        const newData = randomNodes(45, 5, 99);
        frames.current = [];
        frameIndex.current = null;
        setData([...newData]);
    };

    const generateFrames = data => {
        const newIter = algorithm.function(data);

        const frames = [];

        for (let data of newIter) {
            frames.push([...data]);
        }
        return frames;
    };

    const handlePause = () => {
        playing.current = false
    };
    const handlePlay = async () => {
        if (playing.current) return;
        playing.current = true

        if (frames.current.length === 0) {
            frames.current = generateFrames(sizedData);
        }
        while (frameIndex.current < frames.current.length && playing.current) {
            await sleep(1);
            setSizedData(frames.current[frameIndex.current ?? 0]);
            if(frameIndex.current === frames.current.length - 1) break;
            frameIndex.current += 1;
        }
        playing.current = false
    };
    const handleForward = () => {
        if (frameIndex.current === frames.current.length - 1) return;
        if (frames.current.length === 0) {
            frames.current = generateFrames(sizedData);
        }

        if (playing.current) return;

        if (frameIndex.current === null) {
            setSizedData(frames.current[0]);
            frameIndex.current = 0;
            return;
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

    useEffect(() => resizeData(), [data, dataSize]);

    return (
        <div className={styles.container}>
            <Board nodeData={sizedData} />
            <div className={styles.controls}>
                <Slider
                    initialValue={20}
                    max={100}
                    min={1}
                    onChange={value => (algoSpeed.current = value)}
                    disabled={playing.current}
                />
                <Slider
                    onChange={setDataSize}
                    initialValue={45}
                    max={data.length}
                    min={10}
                    disabled={playing.current}
                />
                <button onClick={randomizeData} disabled={playing.current}>
                    RandomizeData
                </button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handlePlay} disabled={playing.current}>Play</button>
                <button
                    onClick={handleForward}
                    disabled={frameIndex.current === frames.current.length - 1 || playing.current}
                >
                    Forward
                </button>
                <button
                    onClick={handleBackward}
                    disabled={
                        frameIndex.current === 0 || frameIndex.current === null || playing.current
                    }
                >
                    Backward
                </button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
