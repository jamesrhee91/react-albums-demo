import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class Authentication extend Component {
  constructor() {
    super()
    this.state = { username: null, password: null }
  }

  userSignup() {
    Actions.HomePage()
  }

  userLogin() {
    Actions.HomePage()
  }

  handleChange = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>Welcome</View>

        <View style={styles.form}>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.state.username}
          />
        </View>
      </View>
    )
  }
}
