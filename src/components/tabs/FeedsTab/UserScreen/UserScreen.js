import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, CardItem, Spinner } from "native-base";
import TextBox from "../../../UI/TextBox/TextBox";

class UserScreen extends Component {
  state = {
    dataReceived: false
  };

  fetchData() {
    if (!this.state.dataReceived) {
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
      <View>
        {!this.state.dataReceived ? <Spinner /> : null}
        <Card style={styles.container}>
          <CardItem header>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {this.state.username}
            </Text>
          </CardItem>
          <CardItem cardBody style={styles.userInfoContainer}>
            <View>
              <Text>{this.state.name}</Text>
              <Text>{this.state.email}</Text>
            </View>
          </CardItem>
        </Card>
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
