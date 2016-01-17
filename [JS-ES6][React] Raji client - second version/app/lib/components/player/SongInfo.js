import React from 'react';


const SongInfo = ({image, title, artist, album}) =>
  <div className="Player-song">
    <img className="Player-songImage" src={image} />
    <div className="Player-songInfo">
      <p className="Player-text Player-text--title"> {title} </p>
      <p className="Player-text"> {artist} </p>
      <p className="Player-text"> {album} </p>
    </div>
  </div>
;




export default SongInfo;
