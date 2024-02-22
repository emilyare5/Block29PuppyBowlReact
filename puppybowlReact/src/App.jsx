import { useState } from 'react'
import Allplayers from './components/AllPlayers'
import Newplayerform from './components/NewPlayerForm'
import Singleplayer from './components/SinglePlayer'
import { Link, Routes, Route } from 'react-router-dom'
import SearchBar from './components/searchbar'

function App() {
 

  return (
    <>
      
      <Link to="/"> <button>Home (See All Players)</button> </Link>
      <Link to="/searchbar"> <button>Search Player</button> </Link>
      {/* <Link to="/newplayerform"> <button></button> </Link> */}
      
      
      <Routes>
        <Route path="/" element={<Allplayers/>}/>
        <Route path="/singleplayer/:bookID" element={<Singleplayer/>}/>
        {/* <Route path="/newplayerform" element={<Newplayerform/>}/> */}
        <Route path="/searchbar" element={<SearchBar/>}/>
        
      </Routes>



    </>
  )
}

export default App
