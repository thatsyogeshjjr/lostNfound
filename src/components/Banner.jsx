import BannerImg from "../assets/shapes/title.svg";

export var Banner = () => {
  return (
    <>
      <div id="banner">
        <img src={BannerImg} alt="" className="w-[80vw]" />
      </div>
    </>
  );
};
