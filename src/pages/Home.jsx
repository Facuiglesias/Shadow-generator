/* IMPORTS */
import { Link } from "react-router";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Header>CSS Generator Tools</Header>

      <main className="flex flex-col p-4 gap-4 text-white text-lg font-bold">
        <Link
          className="bg-[#222] p-4 rounded-lg hover:bg-[#131313] text-center"
          to="container-shadow-generator"
        >
          Box Shadow
        </Link>
        {/* <button className="bg-[#222] p-4 rounded-lg hover:bg-[#131313]">
          Text Shadow
        </button> */}
      </main>
    </>
  );
}

export default Home;
