import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    const links = (
       <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/campaigns"}>Campaigns</NavLink>
        <NavLink to={"/addCampaigns"}>Add Campaign</NavLink>
        <NavLink to={"/myCampaign"}>My Campaign</NavLink>
        <NavLink to={"/myCampaign"}>My Donation</NavLink>
       </>
    )

    return (
        <div className="navbar bg-base-100 w-[88%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={"/"} className="btn btn-ghost text-xl">Crowdcube</Link>
  </div>

  {/* Center */}
  <div className="navbar-center hidden md:flex ">
    <ul className="menu menu-horizontal px-1 gap-5">
      {links}
    </ul>
  </div>

  {/* End */}
  <div className="navbar-end gap-3">
    <Link className='btn btn-secondary'>Log in</Link>
    <Link className='btn btn-outline'>Register</Link>
  </div>
</div>
    );
};

export default Navbar;