import React from 'react'


class SongInfo extends React.Component {
  render () {
    return (
      <div className="Player-song">
        <img className="Player-songImage" src={this.props.image} />
        <div className="Player-songInfo">
          <p className="Player-text Player-text--title"> {this.props.title} </p>
          <p className="Player-text"> {this.props.artist} </p>
          <p className="Player-text"> {this.props.album} </p>
        </div>
      </div>
    )
  }
}


export default SongInfo
