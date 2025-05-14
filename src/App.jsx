import NoRecipe from './pages/NoRecipe.jsx';
import SideBar from './components/SideBar.jsx';
import Header from './components/Header.jsx';
import NewRecipe from './pages/NewRecipe.jsx';
import Recipes from './pages/Recipes.jsx';
import MealPage from './pages/MealPage.jsx';

function App() {

  return (
    <main className='grid grid-cols-[15vw_1fr] grid-rows-[60px_1fr] h-screen'>
     <SideBar/>
     <Header/>
     {/* <NoRecipe/> */}
     {/* <NewRecipe/> */}
     {/* <Recipes/> */}
     <MealPage/>
    </main>
  )
}

export default App
