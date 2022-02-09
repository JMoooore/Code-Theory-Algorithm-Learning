import { useState, useCallback } from 'react';
import styles from '../../styles/Slider.module.css';

const Slider = props => {
    const { initialValue, title } = props;
    const [value, setValue] = useState(initialValue);

//     const setRef = useCallback(input => {
//         input.onchange = props.onChange
//             ? e => {
//                   props.onChange(e.target.value);
//               }
//             : null;
// 
//         input.oninput = props.onInput
//             ? e => {
//                   setValue(e.target.value);
//                   props.onInput(e.target.value);
//               }
//             : null;
//     }, []);
    //
    const handleChange = (e) => {
        props.onChange(e.target.value)
        setValue(e.target.value)
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <input
                className={styles.input}
                type="range"
                onChange={handleChange}
                value={value}
                max={props.max}
                min={props.min}
                disabled={props.disabled ?? false}
            />
            <p className={styles.value}>{value}</p>
        </div>
    );
};
Slider.defaultProps = {
    onChange: () => {},
    min: 0,
    max: 100,
    disabled: false,
    initialValue: 50,
    onChange: () => {}
};
export default Slider;
