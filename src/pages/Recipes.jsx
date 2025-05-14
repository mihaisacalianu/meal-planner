import {useState, useEffect} from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import NoRecipe from './NoRecipe.jsx';
import Error from './Error.jsx';

function Recipes() {

  const [isFetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();

useEffect(()=>{
  setIsFetching(true);
  async function fetchMeals(){
    try {
      const response = await fetch("https://6823283065ba058033957fbd.mockapi.io/meals");
      const resData = await response.json();
      if(!response.ok){
        throw new Error("Failed to fetch meals");
      }
      setMeals(resData);
    } catch (error) {
      setError(error);
    }
    setIsFetching(false);
  }
  fetchMeals();
},[]);

  if (error) {
    return <Error message='Could not fetch meals'/>
  }

  return (
    <section className=' flex flex-wrap gap-4 col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5 justify-center'>
      {isFetching && <p>Meals are loading</p>}
      {!isFetching && meals.length === 0 && <NoRecipe/>}
      {meals.length > 0 && meals.map((meal)=> <RecipeCard key={meal.id} meal={meal}/>)}
    </section>
  )
}

export default Recipes
