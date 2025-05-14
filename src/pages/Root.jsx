import { Outlet } from "react-router-dom";
import SideBar from '../components/SideBar.jsx';
import Header from '../components/Header.jsx';

function RootLayout() {
  return (
    <main className='grid grid-cols-[15vw_1fr] grid-rows-[60px_1fr] h-screen'>
      <Header/>
      <SideBar/>
      <Outlet/>
    </main>
  )
}

export default RootLayout;
