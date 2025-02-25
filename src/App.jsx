import React, {useState, useEffect} from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import TrackList from './components/TrackList'
const clientId = "ed6e5dfe76ec4ea3ad04fa5722bffdd7"
const clientSecret = "197dc4e34e354bd294ae73fb39cf073e"; 
const redirect_uri = 'http://localhost:5173/callback'; 
const space_delimiter = "%20"
const scopes = ["user-read-private", "user-read-email"]
const scopes_url_param = scopes.join(space_delimiter)
const spotify_authorize_endpoint = "https://accounts.spotify.com/authorize"

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    //console.log(accumulater)
    return accumulater;
    
  }, {});

  return paramsSplitUp;
}


function App() {

  //userAuthorization 
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (window.location.hash) {
     const {access_token, expires_in, token_type} =  getReturnedParamsFromSpotifyAuth(window.location.hash); 
    // console.log({access_token})
    }
  })

    function handleLogin (){
      window.location = `${spotify_authorize_endpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes_url_param}&response_type=token&show_dialog=true/`

    }


    //Search bar component
    const [search, setSearch] = useState("");
    const [tracks, setTracks] = useState([]);

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    //Searching Spotify
    async function handleSubmit(e){
      e.preventDefault();
        console.log(`Searching for ${search}...`)

      //Grab tracks
      const trackParameters = {
        Method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
      const trackFetch = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=5`, trackParameters).then(response => response.json()).then(data => {return data.tracks.items})
      console.log(trackFetch)
      setTracks((prev) => trackFetch)
      console.log(tracks)

        document.getElementById("searchBar").value = ""

    }
            

    //Playlist builder 
    const [userPlaylist, setUserPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState("")

    function handleAddingSongs(song){
        if (!Array.prototype.includes.call(userPlaylist, song)){
          setUserPlaylist((prev) => [...prev, song])
        } else {
          console.log(`already added!`)
        }
        }
         
    //Spotify API Access Token 
        const [accessToken, setAccessToken] = useState("");


    useEffect(() => {
      const authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      }
      fetch('https://accounts.spotify.com/api/token', authParameters).then(result => result.json()).then(data => setAccessToken(data.access_token))

    }, [])



    function handleRemoveSongs(index){
      setUserPlaylist((prev) => prev.filter((_, i) => i !== index))
    }

    function handlePlaylistName(e){
        setPlaylistName(e.target.value); 

    }

 


  return (
    <>
    <button onClick={handleLogin}>Login to Spotify</button>
    <header>
    <h1>Jammming!</h1>
    <p>Create your own Spotify Playlist</p><br /> 
    </header>
    <SearchBar search={search} onSubmit={handleSubmit} onChange={handleSearchChange} /><br /> 
    <TrackList tracks={tracks} handleAddingSongs={handleAddingSongs}/> 
    <Playlist handleRemoveSongs={handleRemoveSongs} userPlaylist={userPlaylist} handlePlaylistName={handlePlaylistName} playlistName={playlistName}/> 
    </>
  )
}

export default App
