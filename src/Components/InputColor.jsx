function InputColor({id, handleOnChange, children}) {
    return(
        <div className="flex flex-col items-center gap-1">
            <label htmlFor={id}>{children}</label>
            <input id={id} onChange={(e)=>{handleOnChange(e)}} type="color"/>
        </div>
    )
}

export default InputColor;