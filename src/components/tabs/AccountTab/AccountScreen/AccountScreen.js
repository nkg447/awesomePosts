import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, CardItem, Spinner, Text } from "native-base";

class AccountScreen extends Component {
  state = {
    dataReceived: false
  };

  static navigationOptions = {
    title: "Your Account"
  };

  fetchData() {
    if (!this.state.dataReceived) {
      fetch(
        "https://burger-builder447.firebaseio.com/users/" +
          this.props.screenProps.username +
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
        <Card>
          <CardItem header>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {this.state.username}
            </Text>
          </CardItem>
          <CardItem style={styles.userInfoContainer}>
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

export default AccountScreen;
