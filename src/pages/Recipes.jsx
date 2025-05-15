import RecipeCard from '../components/RecipeCard.jsx';

import { useLoaderData } from 'react-router-dom';

function Recipes() {
  const meals = useLoaderData();

  return (
    <section className=' flex flex-wrap gap-4 col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5 justify-center'>
      {meals.length > 0 && meals.map((meal)=> <RecipeCard key={meal.id} meal={meal}/>)}
    </section>
  )
}

export default Recipes

export async function loader() {
   const response = await fetch("https://6823283065ba058033957fbd.mockapi.io/meals");
    if(!response.ok){
      throw {message: "could not fecth meals"};
    }else{
      const resData = await response.json();
      return resData;
    }
}
