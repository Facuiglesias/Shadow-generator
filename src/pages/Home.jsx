/* IMPORTS */
import { Link } from "react-router";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Header>CSS Tools</Header>
      <main className="px-8 flex flex-col gap-6 text-white py-8">
        <h1 className="font-semibold">Bienvenido a CSS Generator Tools</h1>
        <p>
          Explora nuestras herramientas de diseño personalizadas para llevar tus
          proyectos al siguiente nivel. Genera sombras para contenedores,
          textos, y más con solo unos clics. Simplifica tu flujo de trabajo y
          obtén resultados impresionantes en menos tiempo.
        </p>
        <div className="flex flex-col gap-3 pb-16">
          <Link
            className="border border-[#131313] p-4 rounded-lg text-center"
            to="container-shadow-generator"
          >
            Box Shadow
          </Link>
          <Link
            className="border border-[#131313] p-4 rounded-lg text-center"
            to="text-shadow"
          >
            Text Shadow
          </Link>
          <Link
            className="bg-[#222] p-4 rounded-lg hover:bg-[#131313] text-center"
            to="container-shadow-generator"
          >
            Box Shadow
          </Link>
          <Link
            className="bg-[#222] p-4 rounded-lg hover:bg-[#131313] text-center"
            to="container-shadow-generator"
          >
            Box Shadow
          </Link>
          <Link
            className="bg-[#222] p-4 rounded-lg hover:bg-[#131313] text-center"
            to="container-shadow-generator"
          >
            Box Shadow
          </Link>
          <Link
            className="bg-[#222] p-4 rounded-lg hover:bg-[#131313] text-center"
            to="container-shadow-generator"
          >
            Box Shadow
          </Link>
        </div>
        {/* <button className="bg-[#222] p-4 rounded-lg hover:bg-[#131313]">
          Text Shadow
        </button> */}
      </main>
    </>
  );
}

export default Home;
