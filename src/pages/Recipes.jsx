import {useState, useEffect} from 'react';
import RecipeCard from '../components/RecipeCard'
import NoRecipe from './NoRecipe';

function Recipes() {

  const [isFetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState([]);

useEffect(()=>{
  setIsFetching(true);
  async function fetchMeals(){
    const response = await fetch("https://6823283065ba058033957fbd.mockapi.io/meals");
    const resData = await response.json();
    setMeals(resData);
    setIsFetching(false);
  }
  fetchMeals();
},[]);


  return (
    <section className=' flex flex-wrap gap-4 col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5 justify-center'>
      {isFetching && <p>Meals are loading</p>}
      {!isFetching && meals.length === 0 && <NoRecipe/>}
      {meals.length > 0 && meals.map((meal)=> <RecipeCard key={meal.id} meal={meal}/>)}
    </section>
  )
}

export default Recipes
