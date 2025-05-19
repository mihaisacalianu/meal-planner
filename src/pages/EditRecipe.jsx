// import { Link, useParams } from "react-router-dom";
import { Form, redirect, useRouteLoaderData } from "react-router-dom";

function EditRecipe() {
  const meals = useRouteLoaderData('meal-detail');
  return (
    <section className='col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5'>
      <div className="flex-col" aria-label='Main recipe details form'>
        <Form method="put" className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='Enter recipe title' defaultValue={meals ? meals.title : '' }/>
          <label htmlFor="image">Image</label>
          <input type="text" name='image' placeholder='Enter recipe image' defaultValue={meals ? meals.image : '' }/>
          <label htmlFor="time">Time</label>
          <input type="number" name='time' step="5"placeholder='Select time in minutes' defaultValue={meals ? meals.time : '' }/>
          <label htmlFor="serving">Serving size</label>
          <input type="number" name='serving' step="1" placeholder='Select number of servings' defaultValue={meals ? meals.serving : '' }/>
          <label htmlFor="directions">Directions</label>
          <textarea name='directions' placeholder='Enter recipe directions' rows="6" cols="50" defaultValue={meals ? meals.directions : '' }/>
           <label htmlFor="ingredients">Ingredients</label>
          <textarea name='ingredients' placeholder='Enter recipe ingredients' rows="6" cols="50" defaultValue={meals ? meals.ingredients : '' }/>
          <button type='submit' className='active mt-5 mx-auto'>Save Recipe</button>
        </Form>
      </div>
      <div className="" aria-label='Ingredients details Form'>

      </div>
    </section>
  )
}

export default EditRecipe;

export async function action({request,params}){
  const data = await request.formData();
  const mealData = {
    title: data.get("title"),
    time: data.get("time"),
    serving: data.get("serving"),
    directions: data.get("directions"),
    image: data.get("image")
  }
  const response = await fetch(`https://6823283065ba058033957fbd.mockapi.io/recipes/${params.id}`,{
    method: 'PUT',
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify(mealData)
  })
  if(!response.ok){
    throw {message: "could not fetch meals"};
  }

  return redirect("/recipes");
}
