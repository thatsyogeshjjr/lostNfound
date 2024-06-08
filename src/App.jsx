import "./App.css";
import { Navbar } from "./components/Navbar";
import { ItemCard } from "./components/ItemCard";
import BannerImg from "./assets/banner.png";
import PlaceholderImg from "./assets/no_img.jpg";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div
          id="hero"
          className="w-screen flex flex-col justify-center items-center my-8 gap-12"
        >
          <img
            src={BannerImg}
            alt="Banner Image"
            className=" h-max sm:h-80 w-[70vw] rounded-lg flex justify-start items-center"
          ></img>
          <div
            id="cta"
            className="flex flex-row gap-5 *:border-2 *:text-md *:px-10 *:py-2 *:rounded-full *:text-black *:bg-white *:border-solid *:border-[#9767c2] "
          >
            <button className="active:bg-zinc-200">Report a lost Item</button>
            <button className="active:bg-zinc-200">I found something</button>
          </div>
        </div>
        <div id="claim-section">
          <h2 className="text-3xl text-[#494850] m-16">
            Something Looks Familiar?
            <br />
            Claim Now!
          </h2>
          <div
            id="cards"
            className="flex flex-row gap-6 flex-wrap scroll-m-0 m-16"
          >
            <ItemCard
              name="Bag"
              img={PlaceholderImg}
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore maxime harum in temporibus optio perferendis consectetur, ducimus nostrum, earum officiis veritatis recusandae ut ex dignissimos, possimus illum velit aut? Culpa."
            />
            <ItemCard
              name="Bag"
              img={PlaceholderImg}
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore maxime harum in temporibus optio perferendis consectetur, ducimus nostrum, earum officiis veritatis recusandae ut ex dignissimos, possimus illum velit aut? Culpa."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
