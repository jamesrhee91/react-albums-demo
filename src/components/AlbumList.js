import React from 'react'
import { View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(res => res.json())
    //   .then(data => console.log("fetch", data))
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}
