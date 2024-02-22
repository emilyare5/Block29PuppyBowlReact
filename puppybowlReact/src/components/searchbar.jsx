import { useState, useEffect} from 'react';
import { fetchSearchData } from '../API';


export default function SearchBar(){
    
    const[input, setInput] = useState('')

    

    useEffect(()=> {

        async function data(){
            const getData = await fetchSearchData()
            setInput(getData)

        }

        data()
    },[])

    // function handleChange(value){
    //     setInput(value)

    // }

    return(
        <div>
            <input placeholder="type to search..." 
            value={input} 
            onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

