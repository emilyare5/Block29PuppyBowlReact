import { Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAllPlayers } from '../API';

export default function Allplayers(){

    const [players, setPlayers] = useState(null)

    useEffect(()=> {

        async function players(){
            const getPlayers = await getAllPlayers()
            setPlayers(getPlayers)

        }

        players()
    },[])
    
    // console.log(players)

    return(
        <div>
            <h2>All Players</h2>

            {players && players.map(player =>{
                return <div key={player.id}>

                    <p>{player.name}</p>
                    <Link to={`/singleplayer/${player.id}`}> <button>Single Player</button> </Link>
                    

                </div>
            } )}

            

        </div>
    )
}
