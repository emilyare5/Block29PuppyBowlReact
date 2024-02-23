
// API to get all players 
export async function getAllPlayers() {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players`)
        // console.log(response)
        const result = await response.json()
        // console.log(result)
        const resultplayers = result.data.players
        // console.log(resultplayers)
        return resultplayers
        


    } catch (error) {
        console.error(error);
    }
}

// API to get single player data
export async function getSinglePlayer(bookID){

        // console.log(bookID)
    
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players/${bookID}`)
        // console.log(response)
        const result = await response.json()
        // console.log(result)
        const resultplayers = result.data.player
        // console.log(resultplayers)
        return resultplayers
        


    } catch (error) {
        console.error(error);
    }

    

}

export async function fetchSearchData() {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players`)
        // console.log(response)
        const result = await response.json()
        const resultplayers = result.data.players
        // console.log(resultplayers)
        return resultplayers
        


    } catch (error) {
        console.error(error);
    }
}

// API to craete new player
export async function playerAPI(newPlayer) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players`,
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newPlayer)
        })
        // console.log(response)
        const result = await response.json()
        
        
        return result
        


    } catch (error) {
        console.error(error);
    }
}

// API to delete player
export async function DeletePlayer(playerId){
    try {
        const deleteResponse = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players/${playerId}`, {
            method: 'DELETE',
            headers: {"Content-Type":"application/json"},
        });

        const result = await deleteResponse.json()
        // console.log(result)

        return result
        
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }

}







