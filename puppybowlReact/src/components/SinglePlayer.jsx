import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getSinglePlayer } from '../API';




export default function Singleplayer() {

    // created a useState to save the singleData from the API 
    const [singleData, setSingleData] = useState(null)

    // useParams allows us to get things from the URL..has to match from the route
    let { puppyID } = useParams()

    // craete a useEffect to run after return when the API finish getting the data ..only run once when the button is clicked
    // first time it run it return null, second time now with the data 
    useEffect(() => {
        
        // need crate a async function bc it is inside an useEffect and wont like it if we dont have one
        async function single() {

            const data = await getSinglePlayer(puppyID)
            setSingleData(data)

        }

        single()
    }, [])

    // console.log(singleData)

    return (
        <div>
            {singleData ? (
                <div>
                    <h2>More Infomation!</h2>
                    <h2>{singleData.name}</h2>
                    <p>Id: {singleData.id}</p>
                    <img src={singleData.imageUrl}/>
                    <p>Breed: {singleData.breed}</p>
                    <p>Status: {singleData.status}</p>
                    <p>Cohort Id: {singleData.cohortId}</p>
                    <p> Created at: {singleData.createdAt}</p>
                    <p> Updated at: {singleData.updatedAt}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )

    
}
