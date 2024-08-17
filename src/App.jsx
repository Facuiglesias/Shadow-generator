/*IMPORTS */ 
import { useState, useId } from "react"
import ShadowBalls from "./Components/shadowBalls.jsx";
import Footer from "./Components/Footer.jsx";
import InputRange from "./Components/InputRange.jsx";
import InputColor from "./Components/InputColor.jsx";
const elementHTML = document.querySelector("html");

function App() {
  /* STATES */
  // params: shadow´s filters.
  // setParams: change shadow´s filters.
  const [params, setParams] = useState({
    horizontal: 0,
    vertical: 25,
    blur: 50,
    spread: -12,
    shadowColor: "#d946ef", 
    shadowOpacity: 1, 
    squareColor: "rgb(34 211 238)", 
    bgColor: "",
    shadowInset: false
  })
  

  /* SVGs */
  const moonSVG = <svg 
  className="w-6 h-6 fill-black stroke-black dark:fill-white dark:stroke-white"
  viewBox="0 0 35 35" >
    <g id="SVGRepo_iconCarrier">
      <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
    </g>
  </svg>

  /* IDs */
  const inputHorizontalLength = useId()
  const inputVerticalLength = useId()
  const inputBlurRadius = useId()
  const inputSpreadRadius = useId()
  const inputShadowColor = useId()
  const inputSquareColor = useId()
  const inputBackgroundColor = useId()
  const inputShadowInset = useId()

  /* FUNCTIONS */
  // change shadow´s horizontal value (px)
  const handleHorizontalOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.horizontal = e.target.value
    setParams(newParams)
  }

  // change shadow´s vertical value (px)
  const handleVerticalOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.vertical = e.target.value
    setParams(newParams)
  }

  // change shadow´s blur (px)
  const handleBlurOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.blur = e.target.value
    setParams(newParams)
  }

  // change shadow´s spread (px)
  const handleSpreadOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.spread = e.target.value
    setParams(newParams)
  }
  
  // change shadow´s color
  const handleShadowColorOnChange = (e) => {
    const newParams = structuredClone(params)
    console.log(e.target.value)
    newParams.shadowColor = e.target.value
    setParams(newParams)
  }

  // change square´s color
  const handleSquareColorOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.squareColor = e.target.value
    console.log(newParams)
    setParams(newParams)
  }

  // change square´s background color
  const handleBgColorOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.bgColor = e.target.value
    setParams(newParams)
  }

  // toggle "inset" value
  const handleCheckboxOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.shadowInset = e.target.checked
    setParams(newParams)
  }

  const toggleTheme = () => {
    if (elementHTML.classList.contains("dark")) {
      elementHTML.classList.remove("dark");
    } else {
      elementHTML.classList.add("dark");
    }
  }

  return (
    <>
    <ShadowBalls className={"absolute w-[0px] h-[0px] shadow-cyan-400 shadow-[0px_0px_100px_50px_#f7fafc] -z-50"}/>
    <ShadowBalls className={"absolute w-[0px] h-[0px] top- right-72 shadow-fuchsia-400 shadow-[0px_0px_60px_25px_#f7fafc] -z-50"}/>
      <header className="header-sm">
        <h1>Containers Shadow Generator</h1>
        <button onClick={()=>{toggleTheme()}}>{moonSVG}</button>
      </header>
      <main className="main-sm">
        <div 
          style={{backgroundColor:`${params.bgColor}`}}
          className="squareContainer-sm">
          <div
            style={
              {
                backgroundColor: params.squareColor, 
                boxShadow:`
                ${params.horizontal}px 
                ${params.vertical}px 
                ${params.blur}px 
                ${params.spread}px 
                ${params.shadowColor} 
                ${params.shadowInset ? "inset" : ""}
                ` }}
            className="square-sm"> 
            </div>
        </div>
        <div className="filtersRangeContainer-sm">
          <InputRange 
            id={inputHorizontalLength}
            handleOnChange={handleHorizontalOnChange}
            min={-200}
            max={200}> Horizontal shadow length: {params.horizontal}px 
          </InputRange>
          <InputRange
            id={inputVerticalLength}
            handleOnChange={handleVerticalOnChange}
            min={-200}
            max={200}> Vertical shadow length: {params.vertical}px
          </InputRange>
          <InputRange
            id={inputBlurRadius}
            handleOnChange={handleBlurOnChange}
            min={0}
            max={300}> Blur radius: {params.blur}px
          </InputRange>
          <InputRange
            id={inputSpreadRadius}
            handleOnChange={handleSpreadOnChange}
            min={-200}
            max={200}> Spread radius: {params.spread}px
          </InputRange>
          <div className="filtersColorContainer-sm">
            <InputColor id={inputShadowColor} handleOnChange={handleShadowColorOnChange}>Shadow color</InputColor>
            <InputColor id={inputSquareColor} handleOnChange={handleSquareColorOnChange}>Square color</InputColor>
            <InputColor id={inputBackgroundColor} handleOnChange={handleBgColorOnChange}>Bg color</InputColor>
            <div className="filterInsetContainer-sm">
              <label htmlFor={inputShadowInset}>Shadow inset</label>
              <input id={inputShadowInset} onChange={(e)=>{handleCheckboxOnChange(e)}} className="filterInset-sm" style={{backgroundColor:`${params.shadowInset ? "red" : ""}`}} type="checkbox"/>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="pb-8">
            <h2 className="titles-sm">CSS</h2>
            <div className="resultCodeContainer-sm"> 
              <p>-webkit-box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor} {params.shadowInset ? "inset" : ""};</p>
              <p>-moz-box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor} {params.shadowInset ? "inset" : ""};</p>
              <p>box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor} {params.shadowInset ? "inset" : ""};</p>
            </div>
          </div>
          <div>
            <h2 className="titles-sm">TailwindCSS</h2>
            <div className="resultCodeContainer-sm"> 
              <p>{`shadow-[${params.shadowInset ? "inset_" : ""}${params.horizontal}px_${params.vertical}px_${params.blur}px_${params.spread}px_${params.shadowColor}]`}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    <ShadowBalls className={"absolute w-[0px] h-[0px] -bottom-32 shadow-cyan-400 shadow-[0px_0px_100px_20px_#f7fafc] -z-50"}/>
    <ShadowBalls className={"absolute w-[0px] h-[0px] -bottom-20 right-0 shadow-fuchsia-400 shadow-[0px_0px_100px_25px_#f7fafc] -z-50"}/>
    <ShadowBalls className={"m-auto w-[0px] h-[0px] -bottom-96 shadow-white shadow-[0px_0px_100px_25px_#f7fafc] -z-50"}/>
    </>
  )
}

export default App
