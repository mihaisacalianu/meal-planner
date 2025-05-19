import avatar from "../assets/avatar.jpeg";
import { NavLink } from 'react-router-dom';
function SideBar() {
  return (
    <section className='hidden  row-span-full sm:flex flex-col shadow-lg sm:sticky top-0 left-0 p-4 gap-3 h-[100dvh] min-w-[15%] items-center'>
      <h1 className='text-3xl text-green-500 mb-10'><strong>OSACAM</strong></h1>
      <div aria-label="User photo greeting message and email address" className="flex flex-col items-center gap-2">
        <img src={avatar} alt="user avatar" className="rounded-full w-[60px] shadow-lg"/>
        <h2><strong>Hello! Mihai!</strong></h2>
        <p className="text-[0.75rem] text-gray-400">mihaisacalianu@gmail.com</p>
      </div>
      <div className="flex flex-col  gap-2 mt-10 w-[90%]" aria-label="navigation buttons">
        <NavLink to="/"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>Dashboard</NavLink>
        <NavLink to="/profile"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>Your Profile</NavLink>
        <NavLink to="/recipes"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>Recipes</NavLink>
        <NavLink to="/plan"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>Meal Plans</NavLink>
        <NavLink to="/messages"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>Messages</NavLink>
        <NavLink to="/FAQ"  className={({ isActive }) => isActive ? 'active' : 'hover:bg-gray-200  p-2 py-1 hover:rounded-md'}>FAQ</NavLink>
        <button to="" className="mt-10 bg-gray-200 w-[100%] p-2 rounded-md">Log out</button>
      </div>
    </section>
  )
}

export default SideBar;
