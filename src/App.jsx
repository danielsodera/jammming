import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

function App() {
  

  return (
    <>
    <header>
    <h1>Jammming!</h1>
    <p>Create your own Spotify Playlist</p><br /> 
    </header>
    <SearchBar /><br /> 
    <SearchResults /> 
    </>
  )
}

export default App
