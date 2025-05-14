

function ErrorPage({message}) {
  return (
    <section className="w-[50%] mx-auto mt-30 text-center">
      <h1 className="text-6xl mb-10">An error occured</h1>
      {message ? <p className="text-red-700 text-4xl">{message}</p> : <p>Something is not right with this url address!</p>}
    </section>
  )
}

export default ErrorPage;
