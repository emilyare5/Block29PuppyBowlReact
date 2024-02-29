import { useState } from 'react';
import { playerAPI } from '../API';

export default function Newplayerform({ setNewPlayer }) {

    // created a useSate to store all the value from the form
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("field")
    const [image, setImage] = useState("")



    async function handleSubmit(event) {

        event.preventDefault();

        // created an object with useState getters
        const newPlayer = {
            name: name,
            breed: breed,
            status: status,
            image: image
        };

        console.log(newPlayer)

        // dosent need a use effect here bc the button is trigger this function
        // .................API.......(object I craeted)....from here i was able to post the new player,but i needed to refresh the page
        const result = await playerAPI(newPlayer);

        if (result) {
            // Clear the form after successful submission
            setName("");
            setBreed("");
            setStatus("");
            setImage(""); 
            alert('Player added successfully!');
        }

        // to fix the refresh problem i had to create a useState with the (result)
        // we deconstructed the useState setter to set the API new player object
        setNewPlayer(result)


    }






    return (
        <div>
            <h2 className='formtext'>New Player Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                <br></br>
                <label>Breed:</label>
                <input value={breed} onChange={(event) => setBreed(event.target.value)}></input>
                <br></br>
                <label>Status:</label>
                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="field" >field</option>
                    <option value="bench">bench</option>
                </select>
                {/* <input placeholder='field or bench' value={status} onChange={(event) => setStatus(event.target.value)}></input> */}
                <br></br>
                <label>Image:</label>
                <input value={image} onChange={(event) => setImage(event.target.value)}></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}



