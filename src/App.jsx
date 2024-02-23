import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <div className="bg-slate-900 p-5">
          <Header></Header>
          <div className="flex justify-center">
              <div className="pl-1 bg-red-500"> My INTRO Section</div>
              <div className="bg-blue-500">second</div>
          </div>
        </div>
    </> 
  )
}

export default App
