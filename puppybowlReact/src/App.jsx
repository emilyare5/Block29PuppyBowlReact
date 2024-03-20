import { useState } from 'react'
import Allplayers from './components/AllPlayers'
import Newplayerform from './components/NewPlayerForm'
import Singleplayer from './components/SinglePlayer'
import { Link, Routes, Route } from 'react-router-dom'




function App() {
 

  return (
    <>
      <div className='homebutton'>
        <Link to="/"> <button>Home</button> </Link>
      </div>
      
      
      
      
      <Routes>
        <Route path="/" element={<Allplayers/>}/>

        {/* this has to match the parmas(), we are setting it here..puppyID */}
        {/* we are creating the link in AllPlayers.jsx bc that is where the button is created */}
        {/* the :puppyID here definds the id from the link in AllPlayers.jsx */}
        <Route path="/singleplayer/:puppyID" element={<Singleplayer/>}/>

      </Routes>



    </>
  )
}

export default App
