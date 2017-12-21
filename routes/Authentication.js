import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
// import styles from './styles'

export default class Authentication extend Component {
  constructor() {
    super()
    this.state = { username: null, password: null }
  }

  userSignup = () => {
    Actions.HomePage()
  }

  userLogin = () => {
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

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: 'red',
  },
  form: {
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
