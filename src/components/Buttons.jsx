function Buttons (props) {
    return (
        <>
            <button onClick={props.add}>+</button>
            <button onClick={props.sub}>-</button>
            <br />
            <button onClick={props.mul}>*</button>
            <button onClick={props.div}>/</button>
        </>
    )
}

export default Buttons;