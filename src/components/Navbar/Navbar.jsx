import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/memories.png';

const Navbar = () => {

  const menus = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/memories'>Memories</NavLink></li>
  </>

  return (
    <div>
    <div className="navbar bg-base-300 py-2 px-4 rounded">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
         {menus}
        </ul>
      </div>
     <div className='flex'>
     <h2 className='text-3xl font-bold'>MEMORIES</h2>
     <img className='h-10 w-10' src={logo} alt="" />
     </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {menus}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
    </div>
  );
};

export default Navbar;