import {useState} from 'react';
import styles from '../../styles/Slider.module.css';
const Slider = props => {
    const {initialValue} = props
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        const newValue = e.target.value
        props.onChange(e.target.value);
        setValue(newValue)
    };
    return (
        <div className={styles.container}>
            <p className={styles.value}>{value}</p>
            <input
                type="range"
                onChange={handleChange}
                max={props.max ?? 50}
                min={props.min ?? 0}
                disabled={props.disabled ?? false}
            />
        </div>
    );
};
export default Slider;
