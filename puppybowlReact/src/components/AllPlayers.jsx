import { Link} from 'react-router-dom'

export default function Allplayers(){

    return(
        <div>
            <h2>All Player</h2>

            <Link to="/singleplayer"> <button>Single Player</button> </Link>
        </div>
    )
}
