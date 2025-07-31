

function Card({title , description}) {
  console.log(title, description)
  return (
  <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/33025919/pexels-photo-33025919.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <p className="text-gray-300">
         {description}
        </p>
      </div>
  </div>
  )
}

export default Card