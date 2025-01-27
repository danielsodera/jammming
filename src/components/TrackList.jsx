import React, {useState} from "react";


export default function TrackList({tracks, handleAddingSongs}){


    return (
        <div className="track-list">
        <h2>Results</h2>
        <ul>
        {tracks.map((song, index) => <li className="search-results-list" onClick={() => handleAddingSongs(song)} key={index}>{song.name} by {song.artists[0].name}</li>)}
        </ul>
        </div>
    )
}