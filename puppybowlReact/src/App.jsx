import { useState } from 'react'
import Allplayers from './components/AllPlayers'
import Newplayerform from './components/NewPlayerForm'
import Singleplayer from './components/SinglePlayer'
import { Link, Routes, Route } from 'react-router-dom'
import SearchBarCompoents from './components/searchbarC'


function App() {
 

  return (
    <>
      
      <Link to="/"> <button>Home (See All Players)</button> </Link>
      <Link to="/searchbar"> <button>Search Player</button> </Link>
      
      
      
      <Routes>
        <Route path="/" element={<Allplayers/>}/>

        {/* this has to match the parmas(), we are setting it here..puppyID */}
        {/* we are creating the link in AllPlayers.jsx bc that is where the button is created */}
        {/* the :puppyID here definds the id from the link in AllPlayers.jsx */}
        <Route path="/singleplayer/:puppyID" element={<Singleplayer/>}/>

        
        <Route path="/searchbar" element={<SearchBarCompoents/>}/>
        
      </Routes>



    </>
  )
}

export default App
