/* IMPORTS */
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Header>CSS Generator Tools</Header>

      <main className="flex flex-col p-4 gap-4 text-white text-lg font-bold">
        <a
          href="/container-shadow-generator"
          className="bg-[#222] p-4 rounded-lg hover:bg-[#131313]"
        >
          Box Shadow
        </a>
        <a className="bg-[#222] p-4 rounded-lg hover:bg-[#131313]">
          Text Shadow
        </a>
      </main>
    </>
  );
}

export default Home;
