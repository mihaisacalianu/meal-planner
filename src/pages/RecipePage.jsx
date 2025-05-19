import { IoTime } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link,useSubmit,redirect, useRouteLoaderData} from "react-router-dom";

function RecipePage() {
  const submit = useSubmit();
  const meals = useRouteLoaderData('meal-detail');

  function handleDelete() {
    const confirmation = window.confirm('Are you sure you want to delete this meal?');
    if (confirmation){
      submit(null, {method:'delete'});
    }
  }
  return (
    <section className='flex gap-5 col-start-2 bg-gray-50  row-start-2  p-5'>
      <div className="w-[50%] bg-white rounded-xl shadow-lg" aria-label='meal details container'>
        <img src={meals.image} alt="meal photo" className='w-[100%] h-[250px] mx-auto rounded-t-xl' />
        <div className=" flex justify-between border-b-2 border-gray-200 p-4" aria-label="utility container">
          <div className="flex gap-2 items-center"  aria-label='utility meal info container'>
            <IoTime className="text-green-400"/>
            <p>{meals.time} minutes</p>
            <PiCookingPotFill className="text-orange-400"/>
            <p>{meals.serving} servings</p>
          </div>
          <div className="flex gap-6 mr-3" aria-label='utility buttons container'>
            <Link to="edit" className="flex items-center gap-2 hover:scale-120"> <FaPen  className="text-blue-500"/> Edit</Link>
            <button onClick={handleDelete} className="flex items-center gap-2 hover:scale-120"> <AiFillDelete className="text-red-500"/> Delete</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4" aria-label="directions container">
          <h2 className="text-2xl"><strong>{meals.title}</strong></h2>
          <h3 className="text-xl font-medium"><span>Directions</span></h3>
          {meals.directions}
        </div>
      </div>
      <div className="w-[50%] bg-white rounded-xl shadow-lg" aria-label='meal ingredients container'>
        <div className="flex flex-col gap-4 p-4" aria-label="directions container">
          <h3 className="text-green-500 text-3xl font-extrabold tracking-wide text-center">Ingredients</h3>
          <ul>
          {meals.ingredients.map((ingredient,index)=> <li key={index}>{ingredient}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RecipePage;

export async function loader({params}) {
  const id = params.id
  const response = await fetch("https://6823283065ba058033957fbd.mockapi.io/recipes/" + id);
   if(!response.ok){
      throw {message: "could not fecth meals"};
    }else{
      const resData = await response.json();
      return resData;
    }
}
export async function action({params}){
  const recipeId = params.id;
  console.log('recipeId',recipeId);
  const response = await fetch('https://6823283065ba058033957fbd.mockapi.io/recipes/'+recipeId, {
    method: 'DELETE',
    headers: { 'Content-Type':'application/json'}
  })
  if(!response.ok){
    throw {message: "could not fetch meals"};
  }
  return redirect("/recipes");
}
