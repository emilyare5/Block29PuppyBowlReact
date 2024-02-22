import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getSinglePlayer } from '../API';




export default function Singleplayer() {

    const [singleData, setSingleData] = useState(null)

    let { bookID } = useParams()

    useEffect(() => {

        async function single() {
            const data = await getSinglePlayer(bookID)
            setSingleData(data)

        }

        single()
    }, [bookID])

    console.log(singleData)

    return (
        <div>
            {singleData ? (
                <div>
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
