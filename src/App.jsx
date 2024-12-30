import ShadowBalls from "./Components/ShadowBalls.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import ContainerShadowGenerator from "./pages/ContainerShadowGenerator.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes, BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <>
        {/* Shadow Balls: colored balls on the background */}
        <ShadowBalls
          className={
            "absolute w-[0px] h-[0px] shadow-cyan-400 shadow-[0px_0px_100px_50px_#f7fafc] -z-50"
          }
        />
        <ShadowBalls
          className={
            "absolute w-[0px] h-[0px] top- right-72 shadow-fuchsia-400 shadow-[0px_0px_60px_25px_#f7fafc] -z-50"
          }
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="container-shadow-generator"
            element={<ContainerShadowGenerator />}
          />
        </Routes>

        <Footer />
        <ShadowBalls
          className={
            "absolute w-[0px] h-[0px] -bottom-32 shadow-cyan-400 shadow-[0px_0px_100px_20px_#f7fafc] -z-50"
          }
        />
        <ShadowBalls
          className={
            "absolute w-[0px] h-[0px] -bottom-20 right-0 shadow-fuchsia-400 shadow-[0px_0px_100px_25px_#f7fafc] -z-50"
          }
        />
      </>
    </BrowserRouter>
  );
}

export default App;
