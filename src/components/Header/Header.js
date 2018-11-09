import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.textHeading}>Awesome Posts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
});

export default Header;
