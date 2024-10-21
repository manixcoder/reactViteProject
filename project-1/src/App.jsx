import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import PageInfo from './components/PageInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navigation/>
       <PageInfo/>
      </div>
    </>
  )
}

export default App
