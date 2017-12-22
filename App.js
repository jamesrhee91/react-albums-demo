// Import a library to help create a Component
import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create a Component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
}

export default App;
