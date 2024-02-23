import { Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAllPlayers } from '../API';
import Newplayerform from './NewPlayerForm';

export default function Allplayers(){

    const [players, setPlayers] = useState(null)
    const[newplayer, setNewPlayer] = useState(null)

    useEffect(()=> {

        async function players(){
            const getPlayers = await getAllPlayers()
            setPlayers(getPlayers)

        }

        players()
    },[newplayer])
    
    // console.log(players)

    const handlePlayerAdded = (newPlayer) => {
        setPlayers(prevPlayers => [...prevPlayers, newPlayer])
    }

    return(
        <div>
             

            <h2>All Players</h2>

            <Newplayerform setNewPlayer={setNewPlayer}/>
            {/* <Newplayerform handlePlayerAdded={handlePlayerAdded}/> */}

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
