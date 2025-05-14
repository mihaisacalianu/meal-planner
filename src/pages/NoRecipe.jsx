import { NavLink } from 'react-router-dom';

function NoRecipe() {
  return (
      <section className="col-start-2  row-start-2 flex flex-col gap-4 justify-center items-center">
        <h3>No Recipes</h3>
        <p>Looks like you haven't added any recipes yet.</p>
        <NavLink to="/new" className="bg-green-500 p-2 rounded-md text-white w-[20%]">+Add recipes</NavLink>
      </section>
  )
}

export default NoRecipe
