// import { Link, useParams } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";

function EditRecipe() {
  const meals = useRouteLoaderData('meal-detail');
  return (
    <section className='col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5'>
      <div className="flex-col" aria-label='Main recipe details form'>
        <img src="" alt="upload new recipe photo" className='w-[600px] h-[200px] mx-auto border-2 border-green-400 rounded-lg'/>
        <form action="" className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='Enter recipe title' defaultValue={meals ? meals.title : '' }/>
          <label htmlFor="time">Time</label>
          <input type="number" name='time' step="5"placeholder='Select time in minutes' defaultValue={meals ? meals.time : '' }/>
          <label htmlFor="serving">Serving size</label>
          <input type="number" name='serving' step="1" placeholder='Select number of servings' defaultValue={meals ? meals.serving : '' }/>
          <label htmlFor="directions">Directions</label>
          <textarea name='directions' placeholder='Enter recipe directions' rows="6" cols="50" defaultValue={meals ? meals.directions : '' }/>
          <button type='submit' className='active mt-5 w-[10%] mx-auto'>Save Recipe</button>
        </form>
      </div>
      <div className="" aria-label='Ingredients details form'>

      </div>
    </section>
  )
}

export default EditRecipe;
