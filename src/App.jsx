import { useState } from "react"


function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration -200"
    style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl "> 
      <button onClick={()=>{
        setcolor("red")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"RED"}}> Red</button>
      <button onClick={()=>{
        setcolor("Green")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"Green"}}> Green</button>
      <button  onClick={()=>{
        setcolor("black")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"black"}}> black</button>
      <button  onClick={()=>{
        setcolor("tan")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"tan"}}> tan</button>
      <button  onClick={()=>{
        setcolor("grey")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"grey"}}> grey</button>
      <button  onClick={()=>{
        setcolor("darkkhaki")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"darkkhaki	"}}>darkkhaki	 </button>
      <button  onClick={()=>{
        setcolor("blue")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor :"blue"}}> blue</button>
    </div>


    </div>

  )
}

export default App
