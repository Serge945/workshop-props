import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Avatar'


function App() {
  const [count, setCount] = useState(0)

  const bart ={
    image :"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstname: "Bart",
    lastname:"simpson",
  }

  const homer ={
    image :" https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png",
    firstname:"homer",
    lastname:"simpson",
  }

  return (
    <div>
         <Avatar{...bart}/>
         <Avatar{...homer}/>
    </div>
    
  )
}

export default App
