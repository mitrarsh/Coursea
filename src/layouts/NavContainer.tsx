const NavContainer = () => {
  return (
    <nav className="flex flex-row p-10 pt-16 bg-white justify-between flex-1">
      <div className="menu-icon cursor-pointer md:hidden">
        <img src="assets/icons/menu.svg" alt="" />
      </div>
      <div className="title hidden md:flex">
        <h1>Welcome, Mitra!</h1>
      </div>
      <div className="flex flex-row gap-[4rem]" >
        <div className="search">
          <img src="assets/icons/search-normal.svg" alt="" />
        </div>
        <div className="notif">
          <img src="assets/icons/notif.svg" alt="" />
        </div>
        <div className="profilePic w-[5rem] h-[5rem] rounded-full overflow-hidden flex justify-center">
          <img src="assets/images/prof.avif" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavContainer;
