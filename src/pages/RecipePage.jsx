import { IoTime } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { useParams } from "react-router-dom";

function RecipePage() {
  const params = useParams();
  return (
    <section className='flex gap-5 col-start-2 bg-gray-50  row-start-2  p-5'>
      <div className="w-[50%] bg-white rounded-xl shadow-lg" aria-label='meal details container'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Baked-Potatoes-4fde688.jpg?quality=90" alt="meal photo" className='w-[100%] h-[250px] mx-auto rounded-t-xl' />
        <div className=" flex justify-between border-b-2 border-gray-200" aria-label="utility container">
          <div className="flex gap-2 items-center"  aria-label='utility meal info container'>
            <IoTime className="text-green-400"/>
            <p>20 minutes</p>
            <PiCookingPotFill className="text-orange-400"/>
            <p>9 ingredients</p>
          </div>
          <div className="" aria-label='utility buttons container'>
            <button>Share</button>
            <button className="border-x-2 border-gray-200 px-3">Edit</button>
            <button>Delete</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4" aria-label="directions container">
          <h3>Directions</h3>
          <p>{params.id}</p>
          <ol>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Serve with Dressing and enjoy.</li>
          </ol>
        </div>
      </div>
      <div className="w-[50%] bg-white rounded-xl shadow-lg" aria-label='meal ingredients container'>
        <div className="flex flex-col gap-4 p-4" aria-label="directions container">
          <h3>Directions</h3>
          <h2>Number of servings slider</h2>
          <ol>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Preaheat the oven to 220C</li>
            <li>Serve with Dressing and enjoy.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default RecipePage;
