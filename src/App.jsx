import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NoRecipe from './pages/NoRecipe.jsx';
import NewRecipe from './pages/NewRecipe.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipePage from './pages/RecipePage.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import MealPlan from './pages/MealPlan.jsx';
import Messages from './pages/Messages.jsx';
import FAQ from './pages/FAQ.jsx';

function App() {

const router = createBrowserRouter([
    // first path used for displaying header and sidebar on every pages
    { path:'/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        // path definitions for each component
        {path:'/', element: <Dashboard/>},
        {path:'/profile',element: <Profile/>},
        {path:'/recipes', element: <Recipes/>},
        {path:'/recipes/:id',element: <RecipePage/>},
        {path:'/plan', element: <MealPlan/>},
        {path:'/messages', element: <Messages/>},
        {path:'/faq', element: <FAQ/>},
        {path:'/new', element: <NewRecipe/>}
      ]
    },
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App
