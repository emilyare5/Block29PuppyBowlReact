import { useState, useEffect } from 'react';
import { playerAPI } from '../API';

export default function Newplayerform({ setNewPlayer}) {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("")
    const [image, setImage] = useState("")



    const handleSubmit = async (event) => {
        event.preventDefault();


        const newPlayer = {
            name: name,
            breed: breed,
            status: status,
            image: image
        };

        console.log(newPlayer)
        const result = await playerAPI(newPlayer);
        setNewPlayer(result)

    };

    // useEffect(() => {
       

    //         async function newPlayer() {
    //         }

    //         newPlayer()

            // if (result) {
            //     // Clear the form after successful submission
            //     // setName("");
            //     // setBreed("");
            //     // setStatus("");
            //     // setImage("");
            //     alert('Player added successfully!');
            // } else {
            //     alert('Failed to add player');
            // }
        
            

        


    // }, [name, breed, status, image])


    return (
        <div>
            <h2>New Player Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                <br></br>
                <label>Breed:</label>
                <input value={breed} onChange={(event) => setBreed(event.target.value)}></input>
                <br></br>
                <label>Status:</label>
                <input placeholder='field or bench' value={status} onChange={(event) => setStatus(event.target.value)}></input>
                <br></br>
                <label>Image:</label>
                <input value={image} onChange={(event) => setImage(event.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



