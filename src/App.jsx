import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NoRecipe from './pages/NoRecipe.jsx';
import EditRecipe from "./pages/EditRecipe.jsx";
import NewRecipe, {action as newRecipeAction} from './pages/NewRecipe.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipePage, {loader as MealLoader} from './pages/RecipePage.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import MealPlan from './pages/MealPlan.jsx';
import Messages from './pages/Messages.jsx';
import FAQ from './pages/FAQ.jsx';
import {loader as MealsLoader} from "./pages/Recipes.jsx";
function App() {

const router = createBrowserRouter([
    // first path used for displaying header and sidebar on every pages
    { path:'/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        // path definitions for each component
        {index:true , element: <Dashboard/>},
        {path:'profile',element: <Profile/>},
        {path:'recipes', id:'recipes', element: <Recipes/>, loader:MealsLoader},
        {path:'recipes/:id',
         loader: MealLoader,
         id: 'meal-detail',
         children: [
          {index: true, element: <RecipePage/>},
          {path:'edit',element: <EditRecipe/>},
         ]
        },
        {path:'plan', element: <MealPlan/>},
        {path:'messages', element: <Messages/>},
        {path:'faq', element: <FAQ/>},
        {path:'new', element: <NewRecipe/>, action: newRecipeAction}
      ]
    },
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App
