const Slider = props => {
    const handleChange = e => {
        props.onChange(e.target.value);
    };
    return (
        <input
            type="range"
            onChange={handleChange}
            max={props.max ?? 50}
            min={props.min ?? 0}
        />
    );
};
export default Slider;
