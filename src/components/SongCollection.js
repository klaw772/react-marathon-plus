import React, {useState} from 'react';
import Song from './Song';
import Playlist from './Playlist';
const SongCollection = props => {
    const [selection, setSelection] = useState(null);

    const songs = props.songs.map(song => {
      const handleClick = (event) => {
        event.preventDefault();
        setSelection(song.id);
      }
        return <Song 
          key={song.id}
          song={song}
          handleClick = {handleClick}
          selected = {song.id === selection}
          />
    });

    return (
    <div className = "songs">
        <h2>Songs</h2>
        <div>{songs}</div>
    </div>
  )
}

export default SongCollection