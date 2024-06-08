export var ItemCard = (props) => {
  return (
    <div className="flex flex-col gap-6 items-center bg-[#E6E6E6] shadow-zinc-800 shadow-md w-[180px] h-[290px] p-2 rounded-md overflow-clip">
      <img src={props.img} alt="" className="bg-cover" />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg text-black font-bold">{props.name}</h2>
        <p className="text-sm text-black">{props.desc}</p>
      </div>
    </div>
  );
};
