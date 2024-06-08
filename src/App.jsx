import "./App.css";
import { Navbar } from "./components/Navbar";
import BannerImg from "./assets/cover.jpg";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div
          id="hero"
          className="w-screen flex flex-col justify-center items-center my-8 gap-12"
        >
          <div
            id="banner"
            alt="Banner Image"
            className="h-80 w-[80vw] rounded-lg flex justify-start p-10 items-center"
          ></div>
          <div
            id="cta"
            className="flex flex-row gap-5 *:border-2 *:text-md *:px-10 *:py-2 *:rounded-full *:text-black *:bg-white *:border-solid *:border-[#9767c2]"
          >
            <button className="">Report a lost Item</button>
            <button className="">I found something</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
