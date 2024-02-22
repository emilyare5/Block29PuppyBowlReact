

export async function getAllPlayers() {
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



