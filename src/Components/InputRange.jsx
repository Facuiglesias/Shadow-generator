function InputRange({ id, handleOnChange, min, max, children, step }) {
  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        id={id}
        onChange={(e) => {
          handleOnChange(e);
        }}
        min={min}
        max={max}
        step={step}
        type="range"
        className="mb-4"
      />
    </>
  );
}

export default InputRange;
