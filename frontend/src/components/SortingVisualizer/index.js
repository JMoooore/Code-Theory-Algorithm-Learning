import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/SortingVisualizer.module.css';
import sleep from '../../utils/sleep.js';
import { randomNodes } from '../../utils/randomData.js';
import LinkedList from '../../utils/linkedList.js';
import Node from './Node.js';
import Board from './Board.js';
import Slider from './Slider.js';

const SortingVisualizer = props => {
    const MAX_SIZE = 45;
    const INITIAL_SIZE = 45;
    const INITIAL_ALGO_SPEED = 5;

    const { algorithm } = props;

    const [data, setData] = useState(randomNodes(MAX_SIZE, 5, 99));
    const [dataSize, setDataSize] = useState(INITIAL_SIZE);
    const [nodes, setNodes] = useState(data.slice(0, dataSize));
    const [frame, setFrame] = useState(nodes);
    const [frames, setFrames] = useState(new LinkedList());
    const [sorting, setSorting] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [playing, setPlaying] = useState(false);

    const isPlaying = useRef(false);
    const algoSpeed = useRef();

    const generateFrames = data => {
        const newFrames = new LinkedList();
        const algoIter = algorithm(data);
        for (let frame of algoIter) {
            newFrames.append(frame);
        }
        setFrames(newFrames);
        setFrame(newFrames.head);
    };

    const handlePlay = async () => {
        if (playing) return;
        setSorting(true);
        setPlaying(true);
        isPlaying.current = true;
        let currentFrame = frame;
        while (currentFrame.next && isPlaying.current) {
            const speed = -100*algoSpeed.current + 1000
            await sleep(speed);
            setFrame(prev => {
                currentFrame = prev.next;
                return prev.next;
            });
        }
        setSorting(false);
        setPlaying(false);
        isPlaying.current = false;
        if (!currentFrame.next) setSorted(true);
    };

    const handleNext = () => {
        setSorting(true);
        if (!frame.next) return;
        setFrame(frame.next);
    };
    const handlePrevious = () => {
        if (!frame.previous || frame.previous === frames.head) return;
        setFrame(frame.previous);
    };

    const handleReset = () => {
        const randomData = randomNodes(MAX_SIZE, 5, 99);
        setData(randomData);
        setSorting(false);
        setSorted(false);
        setPlaying(false);
    };

    const handlePause = () => (isPlaying.current = false);

    useEffect(() => setNodes(data.slice(0, dataSize)), [data, dataSize]);
    useEffect(() => generateFrames(nodes), [nodes]);

    return (
        <div className={styles.container}>
            <Board nodeData={frame.data} />
            <div className={styles.controls}>
                <button
                    className={styles.button}
                    onClick={handleReset}
                    disabled={playing}
                >
                    Reset
                </button>
                <Slider
                    onChange={setDataSize}
                    title="Data Size"
                    initialValue={INITIAL_SIZE}
                    min={10}
                    max={MAX_SIZE}
                    disabled={sorting || sorted}
                />
                <Slider
                    onChange={value => (algoSpeed.current = value)}
                    title="Speed"
                    initialValue={INITIAL_ALGO_SPEED}
                    min={1}
                    max={10}
                    disabled={sorted}
                />

                <button
                    className={styles.button}
                    onClick={handlePlay}
                    disabled={playing || sorted}
                >
                    Play
                </button>
                <button
                    className={styles.button}
                    onClick={handlePause}
                    disabled={!playing}
                >
                    Pause
                </button>
                <button
                    className={styles.button}
                    onClick={handleNext}
                    disabled={frame === frames.tail || playing}
                >
                    Next
                </button>
                <button
                    className={styles.button}
                    onClick={handlePrevious}
                    disabled={
                        frame === frames.head ||
                        frame === frames.head?.next ||
                        playing
                    }
                >
                    Previous
                </button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
