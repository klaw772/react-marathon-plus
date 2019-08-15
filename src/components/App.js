import React from 'react'
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

const App = (props) => {
  const data = props.data

  return (
    <div className="app row callout">
      <h2 className="title">React Music Player</h2>
      <div className = "container">
        <PlaylistCollection playlists={props.data.playlists}/>
        <SongCollection songs={props.data.songs}/>
      </div>
    </div>
  );
}

export default App
