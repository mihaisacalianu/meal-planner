import { Outlet,useNavigation} from "react-router-dom";
import SideBar from '../components/SideBar.jsx';
import Header from '../components/Header.jsx';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <main className='grid grid-cols-[15vw_1fr] grid-rows-[60px_1fr] h-screen'>
      <Header/>
      <SideBar/>
      {navigation.state === 'loading' && <p>Loading...</p>}
      <Outlet/>
    </main>
  )
}

export default RootLayout;
