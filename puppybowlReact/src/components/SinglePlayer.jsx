import { useParams } from 'react-router-dom'


export default function Singleplayer(){

    let {bookID} = useParams()

    return(
        <div>
            <h2>Single Player id {bookID}</h2>
        </div>
    )
}
