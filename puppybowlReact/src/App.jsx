import { useState } from 'react'
import Allplayers from './components/AllPlayers'
import Newplayerform from './components/NewPlayerForm'
import Singleplayer from './components/SinglePlayer'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
      
      <Link to="/"> <button>Home (See All Players)</button> </Link>
      
      {/* <Link to="/singleplayer"> <button>Single Player</button> </Link> */}
      {/* <Link to="/newplayerform"> <button></button> </Link> */}
      
      
      <Routes>
        <Route path="/" element={<Allplayers/>}/>
        <Route path="/singleplayer" element={<Singleplayer/>}/>
        {/* <Route path="/newplayerform" element={<Newplayerform/>}/> */}
        
      </Routes>



    </>
  )
}

export default App
