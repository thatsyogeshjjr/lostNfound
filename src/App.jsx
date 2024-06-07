import "./App.css";
import { Banner } from "./components/Banner";
import { Report } from "./components/Report";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen m-2">
        <Banner />
        <Report />
      </div>
    </>
  );
}

export default App;
