import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-600 p-4'>React router</h1>
    <img src='reactrouter/public/pexels-yesimcolak-32019319.jpg'/>
    </>
  )
}

export default App
