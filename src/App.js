import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header,
  Button,
  Spinner,
  Card,
  CardSection
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB3lkMkXkLLquKaQBFL4S_xXht_GXgBizg',
      authDomain: 'react-native-auth-e086e.firebaseapp.com',
      databaseURL: 'https://react-native-auth-e086e.firebaseio.com',
      projectId: 'react-native-auth-e086e',
      storageBucket: 'react-native-auth-e086e.appspot.com',
      messagingSenderId: '123755093861'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
