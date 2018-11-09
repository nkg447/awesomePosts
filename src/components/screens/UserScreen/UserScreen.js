import React, { Component } from "react";
import { View, Text } from "react-native";
class UserScreen extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam("userId", "key-undef")}</Text>
      </View>
    );
  }
}
export default UserScreen;
