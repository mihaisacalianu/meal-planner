import { IoMailSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
function Header() {
  return (
    <header className='flex w-full sm:w-[85%] h-[60px]  shadow-sm p-4 items-center justify-end gap-6'>
      <input type="text" placeholder="Search..." className="w-[60%] sm:w-[40%] h-[30px] border-2 border-gray-200 rounded-full p-2 pl-6  mr-5 sm:mr-20 text-sm"/>
      <IoMailSharp  className="text-green-500 text-2xl"/>
      <FaBell className="mr-10 text-green-500 text-2xl"/>
    </header>
  )
}

export default Header;
