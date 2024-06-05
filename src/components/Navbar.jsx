export var Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between px-6 py-4 bg-[#978897] text-slate-50 top-0 p-2 sticky">
        <h1 className="text-xl">Lost and Found Dept.</h1>
        <ul className="flex flex-row text-lg gap-4 *:border-[solid] *:border-2 *:border-white *:rounded-full *:px-4 *:py-[0.5px]">
          <li>Unclaimed Bids</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};
