function InputColor({ id, handleOnChange, children }) {
  return (
    <div className="filterColor">
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        onChange={(e) => {
          handleOnChange(e);
        }}
        type="color"
      />
    </div>
  );
}

export default InputColor;
