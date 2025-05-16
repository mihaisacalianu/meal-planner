import { IoTime } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";


function RecipeCard({meal}) {

  return (
    <article className='flex flex-col rounded-xl shadow-lg items-center w-[300px] h-[320px]' >
      <Link to={`${meal.id}`}>
        <img src={meal.image} alt="recipe card image" className='w-[300px] h-[200px] rounded-t-xl' />
        <div className="flex flex-col w-[100%] mt-2" aria-label='meal description container'>
          <h3 className='px-6 text-xl overflow-hidden h-[30px]'><strong>{meal.title}</strong></h3>
          <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-2 px-6 text-gray-400" aria-label='meal additional information'>
            <IoTime className="text-green-400"/>
            <p>{meal.time} minutes</p>
            <PiCookingPotFill className="text-orange-400"/>
            <p>{meal.serving} servings</p>
          </div>
        </div>
        <div className=" flex gap-2 text-gray-400 justify-center h-[50px]">
          <Link to={`${meal.id}/edit`}  className="flex items-center gap-2 hover:scale-120"> <FaPen  className="text-blue-500"/>Edit</Link>
        </div>
      </Link>
    </article>
  )
}

export default RecipeCard;
