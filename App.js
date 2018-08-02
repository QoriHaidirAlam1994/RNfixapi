import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

export default class App extends Component {
  constructor() {
    super();

    this.state = { name_user: "", email_user: "", pass_user: "", loading: false, disabled: false };
  }

  saveData = () => {
    // console.log(this.saveData)
    this.setState({ loading: true, disabled: true }, () => {
      fetch(
        "http://localhost/server_registration/user_registration.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name_user: this.state.name_user,

            email_user: this.state.email_user,

            pass_user: this.state.pass_user
          })
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson);
          this.setState({ loading: false, disabled: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
    });
  }

  render() {
    return <View style={styles.container}>
        <TextInput underlineColorAndroid="transparent" placeholder="Your Name" style={styles.textInput} onChangeText={text => this.setState(
              { name_user: text }
            )} />

        <TextInput underlineColorAndroid="transparent" placeholder="Your Email" style={styles.textInput} onChangeText={text => this.setState(
              { email_user: text }
            )} />

        <TextInput underlineColorAndroid="transparent" placeholder="Your Email" style={styles.textInput} onChangeText={text => this.setState(
              { pass_user: text }
            )} />

        <TouchableOpacity disabled={this.state.disabled} activeOpacity={0.8} style={styles.Btn} onPress={this.saveData}>
          <Text style={styles.btnText}>Registration</Text>
        </TouchableOpacity>

        {this.state.loading ? <ActivityIndicator size="large" /> : null}
      </View>;
  }
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      paddingHorizontal: 25,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    textInput:
    {
      height: 40,
      borderWidth: 1,
      borderColor: 'grey',
      marginVertical: 5,
      alignSelf: 'stretch',
      padding: 8,
      fontSize: 16
    },

    Btn:
    {
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 10,
      marginBottom: 25
    },

    btnText:
    {
      textAlign: 'center',
      color: 'white',
      fontSize: 16
    }
  });