import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { DeletePlayer, getAllPlayers } from '../API';
import Newplayerform from './NewPlayerForm';
import Searchbar from './searchbar';

export default function Allplayers() {
    // this use states is save all players from API 
    const [players, setPlayers] = useState(null)

    // this useState is to save the new player, I had to pass the setter into te newPlayerform to save it
    // we need this to display the new player without refresh
    const [newplayer, setNewPlayer] = useState(null)

    // this useState is to save the removed player
    // we need this to display the remove player without refresh
    const [removePlayer, setRemovePlayer] = useState(null)


    // created a useEffect to run after the return once the API finish the fetch call and set it in the useState (setPlayers)
    // first time it run it return null
    // second time it will run once the API finish fetch, but only once
    useEffect(() => {

        // need crate a async function bc it is inside an useEffect and wont like it if we dont have one
        async function players() {

            const getPlayers = await getAllPlayers()
            setPlayers(getPlayers)

        }

        players()

        // here i passed in the getter to run this useEffect(when the setter changes) again that contains the API call 
    }, [newplayer, removePlayer])

    // console.log(players)
    // console.log(newplayer)
    // console.log(removePlayer)

    async function deletePlayer(playerId) {

        // The api delete the players but we need to refresh the page
        const result = await DeletePlayer(playerId)

        if (result) {
            alert('Player removed successfully!');
        }

        // so we saved the removed player in the useStates
        setRemovePlayer(result)
    }



    return (
        <div className='container'>

            <div>
                <div className='form'>
                    {/* deconstructed the setter into the Newplayerform */}
                    <Newplayerform setNewPlayer={setNewPlayer} />

                </div>


                <div className='searchBar'>
                    <Searchbar />
                </div>

            </div>

            <div>
                <h2 className='playertext'>Puppy Bowl Players!</h2>

                <div className='playerContainer'>
                    {players && players.map(player => {
                        return <div key={player.id}>

                            <div>
                                <div>
                                    <p>{player.name}</p>
                                    <img src={player.imageUrl} />

                                </div>

                                <div>
                                    <Link to={`/singleplayer/${player.id}`}> <button>More Infomation!</button> </Link>
                                    <button onClick={() => deletePlayer(player.id)}>Remove Player</button>

                                </div>


                            </div>







                        </div>
                    })}

                </div>

            </div>




        </div>
    )
}
