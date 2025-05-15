import { Form , redirect} from "react-router-dom";
function NewRecipe() {
  return (
    <section className='col-start-2  row-start-2 m-5 rounded-xl shadow-lg p-5'>
      <div className="flex-col" aria-label='Main recipe details form'>
        <img src="" alt="upload new recipe photo" className='w-[600px] h-[200px] mx-auto border-2 border-green-400 rounded-lg'/>
        <Form method="post" className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='Enter recipe title'/>
          <label htmlFor="time">Time</label>
          <input type="number" name='time' step="5"placeholder='Select time in minutes'/>
          <label htmlFor="directions">Serving size</label>
          <input type="number" name='serving' step="1" placeholder='Select number of servings'/>
          <label htmlFor="directions">Directions</label>
          <textarea name='directions' placeholder='Enter recipe directions' rows="6" cols="50"/>
          <button type='submit' className='active mt-5 w-[10%] mx-auto'>Save Recipe</button>
        </Form>
      </div>
      <div className="" aria-label='Ingredients details form'>
      </div>
    </section>
  )
}

export default NewRecipe;

export async function action({request}){
  const data = await request.formData();
  const mealData = {
    title: data.get("title"),
    time: data.get("time"),
    serving: data.get("serving"),
    directions: data.get("directions"),
    image: data.get("image")
  }
  const response  = await fetch("https://6823283065ba058033957fbd.mockapi.io/recipes",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mealData)
  });
  if(!response.ok){
    throw {message: "could not fetch meals"};
  }
  return redirect('/recipes');
}
