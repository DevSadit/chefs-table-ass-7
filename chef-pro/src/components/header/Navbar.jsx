const Navbar = () => {
  return (
    <div className="navbar bg-base-100 my-12">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="navbar-center">
        <ul className=" menu menu-horizontal px-3">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            className="rounded-full"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
