import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextBox from "../../UI/TextBox/TextBox";

class UserScreen extends Component {
  state = {
    dataReceived: false
  };

  fetchData() {
    if (!this.state.dataReceived) {
      console.log(
        "https://burger-builder447.firebaseio.com/users/" +
          this.props.navigation.getParam("userId", "key-undef") +
          ".json"
      );

      fetch(
        "https://burger-builder447.firebaseio.com/users/" +
          this.props.navigation.getParam("userId", "key-undef") +
          ".json"
      )
        .then(res => res.json())
        .then(user => {
          this.setState({ ...user, dataReceived: true });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  }

  render() {
    this.fetchData();
    return (
      <View style={styles.container}>
        <TextBox>{this.state.username}</TextBox>
        <View style={styles.userInfoContainer}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 5,
    padding: 10
  },
  userInfoContainer: {
    borderColor: "#eee",
    borderWidth: 2,
    margin: 5,
    padding: 10
  }
});
export default UserScreen;
