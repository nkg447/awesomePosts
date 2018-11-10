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
    width: "100%"
  },
  userText: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 2
  }
});

export default textBox;
