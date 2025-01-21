import React, {useState} from "react";
import SearchBar from "./SearchBar";
import TrackList from "./TrackList";

const trackData = [
    {id: "1", artist: "kendrick lamar", album: "good kid maad city", song: "poetic justice"},
    {id: "2", artist: "kendrick lamar", album: "good kid maad city", song: "the art of peer pressure"},
    {id: "3", artist: "kendrick lamar", album: "good kid maad city", song: "money trees"},
    {id: "4", artist: "kendrick lamar", album: "good kid maad city", song: "sing about me, i'm dying of thirst"}
]

export default function SearchResults(){

    const [searchResults, setSearchResults] = useState([]);

    



    return (
        <div className="search-result-container">




        </div>
    )
}