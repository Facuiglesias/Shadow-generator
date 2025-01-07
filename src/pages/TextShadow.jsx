/*IMPORTS */
import { useState, useId } from "react";
import InputRange from "../Components/InputRange.jsx";
import InputColor from "../Components/InputColor.jsx";
import Header from "../Components/Header.jsx";

function TextShadow() {
  /* STATES */
  // params: shadow´s filters.
  // setParams: change shadow´s filters.
  const [params, setParams] = useState({
    horizontal: 0,
    vertical: 0,
    blur: 10,
    opacity: 1,
    shadowColor: "rgba(251, 0, 255, 1)",
    textColor: "rgb(34 211 238)",
    bgColor: "",
  });

  /* IDs */
  const inputHorizontalLength = useId();
  const inputVerticalLength = useId();
  const inputBlurRadius = useId();
  const inputShadowOpacity = useId();
  const inputShadowColor = useId();
  const inputTextColor = useId();
  const inputBackgroundColor = useId();

  /* FUNCTIONS */
  // change shadow´s horizontal value (px)
  const handleHorizontalOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.horizontal = e.target.value;
    setParams(newParams);
  };

  // change shadow´s vertical value (px)
  const handleVerticalOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.vertical = e.target.value;
    setParams(newParams);
  };

  // change shadow´s blur (px)
  const handleBlurOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.blur = e.target.value;
    setParams(newParams);
  };

  // change shadow´s opacity (px)
  const handleOpacityOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.opacity = e.target.value;
    const hexColor = params.shadowColor;

    if (hexColor.startsWith("#")) {
      const hexColor = newParams.shadowColor;
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      const a = newParams.opacity;
      newParams.shadowColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
      const values = hexColor
        .slice(5, -1)
        .split(",")
        .map((v) => v.trim()); // Extraer y separar los valores
      const [r, g, b] = values; // Tomar los valores de r, g, b
      const a = newParams.opacity; // Usar la nueva opacidad
      newParams.shadowColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    setParams(newParams);
  };

  // change shadow´s color
  const handleShadowColorOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.shadowColor = e.target.value;
    setParams(newParams);
  };

  // change text´s color
  const handleTextColorOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.textColor = e.target.value;
    setParams(newParams);
    console.log(newParams.textColor);
  };

  // change background color
  const handleBgColorOnChange = (e) => {
    const newParams = structuredClone(params);
    newParams.bgColor = e.target.value;
    setParams(newParams);
  };

  return (
    <>
      <Header>Text Shadow</Header>
      <main className="main">
        <div className="squareContainer">
          <textarea
            className="block m-auto focus:border-slate-800 border border-[#131313] outline-0 p-2 text-2xl rounded-lg bg-transparent"
            defaultValue="Preview text..."
            style={{
              backgroundColor: `${params.bgColor}`,
              color: `${params.textColor}`,
              textShadow: `${params.horizontal}px
              ${params.vertical}px
              ${params.blur}px
              ${params.shadowColor}`,
            }}
          ></textarea>
        </div>
        <div className="filtersRangeContainer">
          <InputRange
            id={inputHorizontalLength}
            handleOnChange={handleHorizontalOnChange}
            min={-200}
            max={200}
          >
            {" "}
            Horizontal shadow length: {params.horizontal}px
          </InputRange>
          <InputRange
            id={inputVerticalLength}
            handleOnChange={handleVerticalOnChange}
            min={-200}
            max={200}
          >
            {" "}
            Vertical shadow length: {params.vertical}px
          </InputRange>
          <InputRange
            id={inputShadowOpacity}
            handleOnChange={handleOpacityOnChange}
            min={0}
            max={1}
            step={0.01}
          >
            {" "}
            Shadow color opacity: {params.opacity}px
          </InputRange>
          <InputRange
            id={inputBlurRadius}
            handleOnChange={handleBlurOnChange}
            min={1}
            max={50}
          >
            {" "}
            Blur radius: {params.blur}px
          </InputRange>
          <div className="filtersColorContainer">
            <InputColor
              id={inputShadowColor}
              handleOnChange={handleShadowColorOnChange}
            >
              Shadow color
            </InputColor>
            <InputColor
              id={inputTextColor}
              handleOnChange={handleTextColorOnChange}
            >
              Text color
            </InputColor>
            <InputColor
              id={inputBackgroundColor}
              handleOnChange={handleBgColorOnChange}
            >
              Bg color
            </InputColor>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div>
            <h2 className="titles">CSS</h2>
            <div className="resultCodeContainer">
              <p>
                text-shadow: {params.horizontal}px {params.vertical}px{" "}
                {params.blur}px {params.shadowColor};
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TextShadow;
