import { Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAllPlayers } from '../API';
import Newplayerform from './NewPlayerForm';

export default function Allplayers(){
    // this use states is save all players from API 
    const [players, setPlayers] = useState(null)

    // this useState is to save the new player, I had to pass the setter into te newPlayerform to save it
    // we need this to display the new player without refresh
    const[newplayer, setNewPlayer] = useState(null)


    // created a useEffect to run after the return once the API finish the fetch call and set it in the useState (setPlayers)
    // first time it run it return null
    // second time it will run once the API finish fetch, but only once
    useEffect(()=> {

        // need crate a async function bc it is inside an useEffect and wont like it if we dont have one
        async function players(){

            const getPlayers = await getAllPlayers()
            setPlayers(getPlayers)

        }

        players()
        
        // here i passed in the getter to run this useEffect again, now with the newplayer object
    },[newplayer])
    
    // console.log(players)

   

    return(
        <div>
             

            <h2>All Players</h2>

            {/* deconstructed the setter into the Newplayerform */}
            <Newplayerform setNewPlayer={setNewPlayer}/>
            

            {players && players.map(player =>{
                return <div key={player.id}>

                    <p>{player.name}</p>
                    <img src={player.imageUrl}/>
                    <Link to={`/singleplayer/${player.id}`}> <button>More Infomation!</button> </Link>
                    

                </div>
            } )}


            

        </div>
    )
}
