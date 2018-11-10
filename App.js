import React, { Component } from "react";
import { View, Button } from "react-native";
import { Form, Item, Text, Input } from "native-base";
import MainNavigation from "./src/MainNavigation";

class App extends Component {
  state = {
    authed: false
  };

  usernameChangeHandler = value => {
    this.setState({
      username: value
    });
  };
  passwordChangeHandler = value => {
    this.setState({
      password: value
    });
  };

  loginHandler = () => {
    fetch(
      "https://burger-builder447.firebaseio.com/users/" +
        this.state.username +
        ".json"
    )
      .then(res => res.json())
      .then(res => {
        if (this.state.password === res.password) {
          this.setState({
            authed: true
          });
        }
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  render() {
    if (this.state.authed) {
      return <MainNavigation screenProps={{ username: this.state.username }} />;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Form>
          <Item>
            <Input
              onChangeText={this.usernameChangeHandler}
              placeholder="username"
            />
          </Item>
          <Item>
            <Input
              onChangeText={this.passwordChangeHandler}
              placeholder="password"
            />
          </Item>
        </Form>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button onPress={this.loginHandler} title="LOGIN" />
        </View>
        <Text>*Note: This is a demo auth.</Text>
        <Text>*Note: username and password are case sensitive</Text>
      </View>
    );
  }
}
export default App;
