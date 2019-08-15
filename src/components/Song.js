import React from 'react'

const Song = props => {
    const classes = props.selected ? "selected" : "";
    
    return (
        <p onClick = {props.handleClick} className = {classes}>
            {`Title: ${props.song.name}  Artist: ${props.song.artist}`}
        </p>
    )

}
export default Song;