import React, {useState} from "react";

export default function SearchBar({search, onSubmit, onChange}){




    return (
        <form onSubmit={(e) => onSubmit(e)}>
        <input id="searchBar" 
               type="text" 
               placeholder="Search for a song..." 
              onChange={(e) => onChange(e)} 
               value={search}/><br /> 
        <button type="submit">Search</button>
        </form>
    )
}