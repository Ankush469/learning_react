import { useState } from 'react'


function App() {
  const [color,setColor]=useState("olive")

  return (
    <>

    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justfied-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=>setColor("red")}
           className='outline-none px-4 px-4 py-1 text-white shadow-lg shadow-lg rounded-xl'
          style={{backgroundColor:"red"}}>
            Red</button>
            <button
            onClick={()=>setColor("green")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg shadow-lg rounded-xl'
          style={{backgroundColor:"green"}}>
            Green</button>
            <button
            onClick={()=>setColor("blue")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg shadow-lg rounded-xl'
          style={{backgroundColor:"blue"}}>
            Blue</button>
            <button
            onClick={()=>setColor("yellow")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg shadow-lg rounded-xl '
          style={{backgroundColor:"yellow"}}>
            Yelllow</button>
            <button
            onClick={()=>setColor("orange")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"orange"}}>
            Orange</button>
            <button
            onClick={()=>setColor("purple")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"purple"}}>
            Purpal</button>
            <button
            onClick={()=>setColor("grey")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"grey"}}>
            Grey</button>
            <button
            onClick={()=>setColor("white")}
            className='outline-none px-4 px-4 py-1 text-black shadow-lg rounded-xl '
          style={{backgroundColor:"white"}}>
            White</button>
            <button
            onClick={()=>setColor("black")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"black"}}>
            Black</button>
            <button
            onClick={()=>setColor("brown")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"brown"}}>
            Brown</button>
            <button
            onClick={()=>setColor("pink")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"pink"}}>
            Pink</button>
            <button
            onClick={()=>setColor("gold")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"gold"}}>
            Gold</button>
            <button
            onClick={()=>setColor("maroon")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"maroon"}}>
            Maroon</button>
            <button
            onClick={()=>setColor("turquoise")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"turquoise"}}>
            Turauoise</button>
            <button
            onClick={()=>setColor("cyan")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"Cyan"}}>
            Cyan</button>
            <button
            onClick={()=>setColor("peach")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"peach"}}>
            Peach</button>
            <button
            onClick={()=>setColor("violet")}
            className='outline-none px-4 px-4 py-1 text-white shadow-lg rounded-xl '
          style={{backgroundColor:"violet"}}>
            Violet</button>
            
        </div>
      </div>
    </div>
    </>
  )
}

export default App
