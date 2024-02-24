import { useState, useEffect } from 'react';
import { searchData } from '../API';

export default function Searchbar({}){

    // this will be used to display the data
    const [data, setData] = useState([])

    // this will be used for filtering the data
    const [filterData, setFilterData] = useState([])

    useEffect(()=>{
        
       async function searchPlayer(){

        const data = await searchData()
        // console.log(data)

        // by default we can see the data if we bring back the console.log
        // setData(data)
        setFilterData(data)
        
        
        
       } 

       searchPlayer()
    

    },[data])


    function handleFilter(value){
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res)
        if(value ===""){
            setData([])
        }
    }

    return(
        <div>
            <h2>Search Player</h2>

            <div className='search'>
                <input type="text" placeholder='Search Here...' onChange={ e => handleFilter(e.target.value)}></input>

            </div>

            <div>
                <div className='search-result'>

                    {data.map((d, i)=> (
                        <div key ={i}>
                            {d.name}
                            <img src={d.imageUrl}/>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}