import React from 'react'

const Playlist = props => {
    const classes = props.selected ? "selected" : ""

    return (
        <div onClick={props.handleClick} className={classes}>{props.name}</div>
    )
}

export default Playlist;