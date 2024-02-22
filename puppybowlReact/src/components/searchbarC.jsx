import React, { useState } from 'react';
import SearchBar from './searchbar';


// App
export default function SearchBarCompoents(){

    

    return(
       <div>
            <div className='searchbar'>
                <SearchBar/>
                <div>SearchResults</div>
            </div>
        </div>
    )
}