import { useState } from "react"
import { useId } from "react"

function App() {
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

  const inputHorizontalLength = useId()
  const inputVerticalLength = useId()
  const inputBlurRadius = useId()
  const inputSpreadRadius = useId()
  const inputShadowColor = useId()
  const inputSquareColor = useId()
  const inputBackgroundColor = useId()

  const gmailSVG = 
  <svg 
  fill="#ffffff" 
  height="30px"
  width="30px"
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" 
  xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <g> 
        <g> 
          <path 
            d="M410.272,243.145c-3.63-4.486-10.211-5.179-14.695-1.548l-3.636,2.942c-4.485,3.631-5.177,10.211-1.546,14.696 c2.066,2.551,5.083,3.875,8.128,3.875c2.309,0,4.634-0.762,6.568-2.328l3.635-2.942 C413.21,254.209,413.903,247.63,410.272,243.145z">
          </path> 
        </g> 
      </g> 
      <g> 
        <g> 
          <path 
            d="M380.363,267.357c-3.63-4.486-10.211-5.179-14.695-1.549l-74.708,59.674c-4.485,3.631-5.177,10.21-1.546,14.695 c2.064,2.551,5.082,3.875,8.127,3.875c2.309,0,4.634-0.762,6.568-2.327l74.708-59.674 C383.301,278.421,383.994,271.843,380.363,267.357z">
          </path> 
        </g> 
      </g> 
      <g> 
        <g> 
          <path 
            d="M449.742,62.685H62.258C27.929,62.685,0,90.614,0,124.942v262.117c0,34.329,27.929,62.257,62.258,62.257h387.484 c34.33,0,62.258-27.928,62.258-62.257V124.942C512,90.614,484.072,62.685,449.742,62.685z M419.912,83.582L255.859,216.19 L91.806,83.582H419.912z M428.126,428.418H83.592V184.382l165.712,133.49c3.826,3.082,9.284,3.082,13.11,0l165.711-133.49V428.418 z M491.102,387.058c0,22.806-18.554,41.359-41.36,41.359h-0.717v-265.87c0-4.023-2.309-7.688-5.939-9.425 c-3.632-1.738-7.934-1.235-11.065,1.288L255.859,296.318L79.697,154.41c-3.134-2.523-7.438-3.026-11.065-1.288 c-3.63,1.737-5.939,5.402-5.939,9.425v265.87h-0.436c-22.805,0.001-41.359-18.553-41.359-41.358V124.942 c0-21.626,16.688-39.418,37.861-41.2l190.532,154.012c1.915,1.549,4.242,2.323,6.568,2.323c2.327,0,4.653-0.774,6.568-2.323 L452.983,83.721c21.295,1.66,38.119,19.507,38.119,41.22V387.058z">
          </path> 
        </g> 
      </g> 
    </g>
  </svg>

  const linkedInSVG = 
  <svg 
  fill="#ffffff" 
  version="1.1" 
  id="Capa_1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="30px" 
  height="30px" 
  viewBox="0 0 552.77 552.77" 
  xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path 
            d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95 C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z">
          </path>
          <path
            d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95 C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z">
          </path>
          <path
            d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846 c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192 c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666 c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343 c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627 c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48 S535.836,228.581,525.732,215.282z">
          </path>
        </g>
      </g>
    </g>
  </svg>
  
  const githubSVG = 
  <svg 
    width="30px" 
    height="30px" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path 
        d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
        fill="#ffffff">
      </path>
      <path 
        d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" 
        fill="#ffffff">
      </path>
    </g>
  </svg>

  const handleHorizontalOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.horizontal = e.target.value
    setParams(newParams)
  }

  const handleVerticalOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.vertical = e.target.value
    setParams(newParams)
  }

  const handleBlurOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.blur = e.target.value
    setParams(newParams)
  }

  const handleSpreadOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.spread = e.target.value
    setParams(newParams)
  }
  
  const handleShadowColorOnChange = (e) => {
    const newParams = structuredClone(params)
    console.log(e.target.value)
    newParams.shadowColor = e.target.value
    setParams(newParams)
  }

  const handleSquareColorOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.squareColor = e.target.value
    console.log(newParams)
    setParams(newParams)
  }

  const handleBgColorOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.bgColor = e.target.value
    setParams(newParams)
  }

  const handleCheckboxOnChange = (e) => {
    const newParams = structuredClone(params)
    newParams.shadowInset = e.target.checked
    setParams(newParams)
  }

  return (
    <>
      <div className="absolute w-[0px] h-[0px] shadow-cyan-400 shadow-[0px_0px_100px_50px_#f7fafc] -z-50"></div>
      <div className="absolute w-[0px] h-[0px] right-72 shadow-fuchsia-400 shadow-[0px_0px_100px_25px_#f7fafc] -z-50"></div>
      <header className="text-white font-sans text-2xl font-bold text-center p-4 shadow-md shadow-[#222] tracking-wide">Containers Shadow Generator</header>
      <main className="flex flex-col text-white pb-16">
        <div 
          style={{backgroundColor:`${params.bgColor}`}}
          className="pt-16 pb-16">
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
            className={`h-[250px] w-[250px] m-auto rounded-lg shadow-2xl`}> 
            </div>
        </div>
        <div className="flex flex-col w-2/3 m-auto pt-4 gap-2 text-lg pb-16">
          <label htmlFor={inputHorizontalLength}>Horizontal shadow length: {params.horizontal}px </label>
          <input id={inputHorizontalLength} onChange={(e)=>{handleHorizontalOnChange(e)}} min="-200" max="200" type="range" className="mb-4"/>
          <label htmlFor={inputVerticalLength}>Vertical shadow length: {params.vertical}px</label>
          <input id={inputVerticalLength} onChange={(e)=>{handleVerticalOnChange(e)}} min="-200" max="200" type="range" className="mb-4"/>
          <label htmlFor={inputBlurRadius}>Blur radius: {params.blur}px</label>
          <input id={inputBlurRadius} onChange={(e)=>{handleBlurOnChange(e)}} min="0" max="300" type="range" className="mb-4"/>
          <label htmlFor={inputSpreadRadius}>Spread radius: {params.spread}px</label>
          <input id={inputSpreadRadius} onChange={(e)=>{handleSpreadOnChange(e)}} min="-200" max="200" type="range" className="mb-4"/>
          <div className="grid grid-cols-2 text-base place-items-center gap-y-4">
            <div className="flex flex-col items-center gap-1">
              <label htmlFor={inputShadowColor}>Shadow color</label>
              <input id={inputShadowColor} onChange={(e)=>{handleShadowColorOnChange(e)}} type="color"/>
            </div>
            <div className="flex flex-col items-center gap-1">
              <label htmlFor={inputSquareColor}>Square color</label>
              <input id={inputSquareColor} onChange={(e)=>{handleSquareColorOnChange(e)}} type="color"/>
            </div>
            <div className="flex flex-col items-center gap-1">
              <label htmlFor={inputBackgroundColor}>Bg color</label>
              <input id={inputBackgroundColor} onChange={(e)=>{handleBgColorOnChange(e)}} type="color"/>
            </div>
            <div className="flex flex-col items-center gap-1">
              <label htmlFor={inputBackgroundColor}>Shadow inset</label>
              <input id={inputBackgroundColor} onChange={(e)=>{handleCheckboxOnChange(e)}} className="w-[25px] h-[25px] appearance-none border rounded-md" style={{backgroundColor:`${params.shadowInset ? "red" : ""}`}} type="checkbox"/>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <h2 className="w-fit m-auto font-bold">CSS</h2>
          <div className="bg-[#222] w-2/3 m-auto text-sm p-3 rounded-md text-center"> 
            <p>-webkit-box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor};</p>
            <p>-moz-box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor};</p>
            <p>box-shadow: {params.horizontal}px {params.vertical}px {params.blur}px {params.spread}px {params.shadowColor};</p>
          </div>
        </div>
        <div>
          <h2 className="w-fit m-auto font-bold">TailwindCSS</h2>
          <div className="bg-[#222] w-2/3 m-auto text-sm p-3 rounded-md text-center"> 
            <p>{`shadow-[${params.horizontal}px_${params.vertical}px_${params.blur}px_${params.spread}px_${params.shadowColor}]`}</p>
          </div>
        </div>
      </main>
      <footer className="text-white flex justify-between items-center footerBorder">
        <p className="text-sm">2024 - Casi todos los derechos reservados</p>
        <div className="flex h-full gap-4">
          <span>{githubSVG}</span>
          <span>{linkedInSVG}</span>
          <span>{gmailSVG}</span>
        </div>
      </footer>
      <div className="absolute w-[0px] h-[0px] -bottom-32 shadow-cyan-400 shadow-[0px_0px_100px_20px_#f7fafc] -z-50"></div>
      <div className="absolute w-[0px] h-[0px] -bottom-20 right-0 shadow-fuchsia-400 shadow-[0px_0px_100px_25px_#f7fafc] -z-50"></div>
      <div className="m-auto w-[0px] h-[0px] -bottom-96 shadow-white shadow-[0px_0px_100px_25px_#f7fafc] -z-50"></div>
    </>
  )
}

export default App
