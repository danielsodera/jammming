import React, {useState} from "react";
import SearchBar from "./SearchBar";
import TrackList from "./TrackList";

export default function SearchResults(){

    const [searchResults, setSearchResults] = useState([{id: 1, artist: "pearl jam", album: "ten", track: "even flow"},
                                                       {id: 2, artist: "pearl jam", album: "ten", track: "jeremy"},
                                                       {id: 3, artist: "pearl jam", album: "ten", track: "black"} 
                                                        ]);




    return (
        <div className="search-result-container">
            <ul>
            {searchResults.map((song) => <li id={song.id}>{song.track} by {song.artist}</li>)}
            </ul>



        </div>
    )
}