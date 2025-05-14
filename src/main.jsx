import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Recipes from './pages/Recipes.jsx';
import NoRecipe from './pages/NoRecipe.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}

        <App />

    {/* </BrowserRouter> */}
  </StrictMode>,
)
