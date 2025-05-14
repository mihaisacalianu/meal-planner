import React from 'react'
import RecipeCard from '../components/RecipeCard'

function Recipes() {
  return (
    <section className=' flex flex-wrap gap-4 col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5 justify-center'>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
    </section>
  )
}

export default Recipes
