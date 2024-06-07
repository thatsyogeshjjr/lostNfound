import ReportImg from "../assets/shapes/report.svg";

export var Report = () => {
  return (
    <>
      <div
        id="report"
        className="relative *:bg-[#171819] text-white flex flex-col gap-5 *:rounded-lg *:px-10 *:py-2 "
      >
        {/* <img src={ReportImg} alt="" className="w-[80vw] mt-10" /> */}
        {/* <div
          id="report-buttons"
          className="absolute m-4 p-3 text-black top-[40%] flex flex-col gap-10 *:bg-white *:rounded-full *:px-10 *:py-2"
        ></div> */}
        <button className="relative">Lost</button>
        <button className="relative">Found</button>
      </div>
    </>
  );
};
