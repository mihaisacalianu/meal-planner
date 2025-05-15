import { IoTime } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function RecipeCard({meal}) {
  return (
    <article className='flex flex-col rounded-xl shadow-lg w-[30%] h-[45%]items-center' >
      <Link to={`/recipes/${meal.id}`}>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Baked-Potatoes-4fde688.jpg?quality=90" alt="recipe card image" className='w-full rounded-t-xl' />
        <div className="flex flex-col w-[100%] mt-2" aria-label='meal description container'>
          <h3 className='px-6 text-xl'><strong>{meal.title}</strong></h3>
          <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-2 px-6 text-gray-400" aria-label='meal additional information'>
            <IoTime className="text-green-400"/>
            <p>{meal.time} minutes</p>
            <PiCookingPotFill className="text-orange-400"/>
            <p>{meal.serving} ingredients</p>
          </div>
        </div>
        <div className=" flex gap-2 text-gray-400 justify-center h-[50px]">
          <button>Share</button>
          <Link to={`${meal.id}/edit`}  className="border-x-2 border-gray-200 px-3">Edit</Link>
          <button>Delete</button>
        </div>
      </Link>
    </article>
  )
}

export default RecipeCard
