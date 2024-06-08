export var Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between w-screen px-10 text-top-0 text-[#978897] py-4 p-2 sticky">
        <h1 className="text-2xl">Lost and Found Dept.</h1>
        <ul className="flex flex-row text-lg gap-4 *:border-[solid] *:border-2 *:border-slate-500 *:rounded-full *:px-4 *:py-[0.5px]">
          <li>Unclaimed Bids</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};
