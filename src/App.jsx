import NoRecipe from './pages/NoRecipe.jsx';
import SideBar from './components/SideBar.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <main className='grid grid-cols-[15vw_1fr] grid-rows-[60px_1fr] h-screen'>
     <SideBar/>
     <Header/>
     <NoRecipe/>
    </main>
  )
}

export default App
