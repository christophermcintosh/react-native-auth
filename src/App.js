import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB3lkMkXkLLquKaQBFL4S_xXht_GXgBizg',
      authDomain: 'react-native-auth-e086e.firebaseapp.com',
      databaseURL: 'https://react-native-auth-e086e.firebaseio.com',
      projectId: 'react-native-auth-e086e',
      storageBucket: 'react-native-auth-e086e.appspot.com',
      messagingSenderId: '123755093861'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
