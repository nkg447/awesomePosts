import React from "react";
import { Text, StyleSheet } from "react-native";
const postTitle = props => {
  return (
    <Text style={[styles.title, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    borderColor: "#bbb",
    borderWidth: 1,
    margin: 2,
    padding: 5
  }
});

export default postTitle;
