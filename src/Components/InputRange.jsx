function InputRange({id, handleOnChange, min, max, children}) {
    return(
        <>
            <label htmlFor={id}> {children} </label>
            <input id={id} onChange={(e)=>{handleOnChange(e)}} min={min} max={max} type="range" className="mb-4"/>
        </>
    )
}

export default InputRange;