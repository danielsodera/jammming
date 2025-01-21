import React, {useState} from "react";

export default function SearchBar(){

    //set useState variable
    const [search, setSearch] = useState("");

    //Adds the input value to the search variable
    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    //submits form, prints data to log and clears input field
    function handleSubmit(e){
         e.preventDefault();
        console.log(`Searching for ${search}...`)
        document.getElementById("searchBar").value = ""
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        <input id="searchBar" 
               type="text" 
               placeholder="Search for a song..." 
              onChange={(e) => handleSearchChange(e)} 
               value={search}/><br /> 
        <button type="submit">Search</button>
        </form>
    )
}