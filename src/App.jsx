import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div
        id="head"
        className=" flex gap-2 *:rounded-md *:bg-[#494850] *:p-4 *:px-10 *:text-white"
      >
        <button className="">Report a lost item</button>
        <button className="">Found Something</button>
      </div>
    </>
  );
}

export default App;
