import React, {useState} from "react";

export default function SearchBar(){

    //set useState variable and user input 
    const [search, setSearch] = useState("");
    let userInput = ""

    //Capture what was entered in search bar and store it in userInput
    function handleSearchChange(e){
        userInput = e.target.value
    }

    //Only store userInput in search variable when the user clicks the search button
    function handleClick(){
        setSearch(userInput)
        console.log(userInput)
    }


    return (
        <div className="search-container">
        <input id="searchBar" type="text" placeholder="Search for a song..." onChange={(e) => handleSearchChange(e)}/><br /> 
        <button onClick={handleClick}>Search</button>
        </div>
    )
}