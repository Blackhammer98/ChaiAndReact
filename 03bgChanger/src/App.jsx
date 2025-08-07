import { useState } from "react"


function App() {
  const [color , setColor] = useState("white")

  return (
    <>
       <div className="w-full h-screen" style={{backgroundColor: color}}>
         <div className="fixed flex flex-wrap  justify-center bottom-14 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-3xl bg-white px-3 py-1">
            <button
             onClick={() => setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl "
              style={{backgroundColor: "red"}}>  red</button>
            <button
             onClick={() => setColor("green")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "green"}}>  green</button>
            <button 
             onClick={() => setColor("yellow")}
             className="outline-none px-4 py-1 rounded-full text-dark shadow-2xl " 
             style={{backgroundColor: "yellow"}}>  yellow</button>
            <button 
             onClick={() => setColor("blue")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "blue"}}>  blue</button>
            <button 
             onClick={() => setColor("black")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl "
             style={{backgroundColor: "black"}}>  black</button>
            <button 
             onClick={() => setColor("lavender")}
             className="outline-none px-4 py-1 rounded-full text-dark shadow-2xl " 
             style={{backgroundColor: "lavender"}}>  lavender</button>
            <button
             onClick={() => setColor("orange")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "orange"}}>  orange</button> 
            <button
             onClick={() => setColor("purple")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "purple"}}>  purple</button> 
            <button
             onClick={() => setColor("grey")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "grey"}}>  grey</button> 
            <button
             onClick={() => setColor("pink")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " 
             style={{backgroundColor: "pink"}}>  pink</button> 
          </div>
          </div>
       </div>
    </>
  )
}

export default App
