import React from "react";
import { View, Text, StyleSheet } from "react-native";
const textBox = props => {
  return (
    <View style={styles.userContainer}>
      <Text style={styles.userText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    borderColor: "#eee",
    borderWidth: 1,
    margin: 2,
    padding: 5,
    alignItems: "flex-start",
    backgroundColor: "white"
  },
  userText: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default textBox;
