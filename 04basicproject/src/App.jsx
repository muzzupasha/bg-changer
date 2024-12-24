import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap justify-center bottoom-12 inset-x-2 px-2'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'>
<button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>
  red
</button>

<button onClick={()=> setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>
  white
</button>

<button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg' style={{backgroundColor: "yellow"}}>
  yellow
</button>

<button onClick={()=> setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg' style={{backgroundColor: "aqua"}}>
  aqua
</button>

<button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-green shadow-lg' style={{backgroundColor: "green"}}>
  green
</button>
     </div>
     </div>
    </div>
  )
}

export default App
