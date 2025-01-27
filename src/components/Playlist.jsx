import React, {useState} from "react";

export default function Playlist({handleRemoveSongs, userPlaylist, playlistName, handlePlaylistName, handleSendToSpotify}){

   





    return (
        <div className="playlist-container">
            <input type="text" className="playlist-name" value={playlistName} onChange={(e) => handlePlaylistName(e)} placeholder="Type in a name for your playlist" /> 
            <ul>
            {userPlaylist.map((song, index) => <li className="playlist-list" key={index} onClick={() => handleRemoveSongs(index)}>{song.name} by {song.artists[0].name}</li>)}
            </ul>
        <button onClick={handleSendToSpotify}>Save to Spotify</button>
        </div>
    )
}