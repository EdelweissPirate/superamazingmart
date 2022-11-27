import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Scene from './components/Scene'
import Splash from './components/pages/Splash'
import Home from './components/pages/Home'

function App() {
  const [isHome, setIsHome] = useState(false)
  const [focusedCat, setFocusedCat] = useState(false)
  
  const categories = [
      'Menswear',
      'Womenswear',
      'Kids',
      'Sportswear',
      'Winterwear',
      'Menswear',
      'Womenswear',
      'Kids',
      'Sportswear',
      'Winterwear',
      'Beachwear',
      'Accessories'
  ]

  const setFocusedCategory = (i) => {
    setFocusedCat(i)
  }

  return (
    <Router>
      <main>
        <section className='ignore-mouse`'>
          <Scene atHome={isHome} focusedCategory={focusedCat} categories={categories} />
        </section>

        <Routes>
          <Route path='/' element={<Splash handleTransition={(i) => {setIsHome(i)}} />} />
          <Route path='/home' element={<Home handleTransition={(i) => {setIsHome(i)}} handleFocus={setFocusedCategory} categories={categories} /> } />
        </Routes>
        
      </main>
    </Router>
  )
}

export default App
