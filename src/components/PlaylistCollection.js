import React, { useState } from 'react';
import Playlist from './Playlist';

const PlaylistCollection = (props) => {
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

    const playlists = props.playlists.map((playlist) => {
        const handleClick = (event) => {
            event.preventDefault()
            setSelectedPlaylistId(playlist.id)
        }

        return <Playlist
                key = {playlist.id}
                name = {playlist.name}
                handleClick = {handleClick}
                selected = {playlist.id === selectedPlaylistId}
                />
    })
    return (
        <div className = "playlists">
          <h2>Playlists</h2>
          <div>{playlists}</div>
        </div>
    )

}

export default PlaylistCollection;