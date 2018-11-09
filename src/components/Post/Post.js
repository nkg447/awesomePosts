import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import PostTitle from "../UI/PostTitle/PostTitle";

class Post extends Component {
  state = {
    username: null
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.props.userId)
      .then(res => res.json())
      .then(user => {
        this.setState({ username: user.username });
      });
  }

  render() {
    return (
      <View style={styles.postContainer}>
        <TouchableNativeFeedback onPress={this.props.pressedUser}>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>{this.state.username}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.props.pressedPost}>
          <PostTitle>{this.props.title}</PostTitle>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    margin: 5,
    padding: 10
  },
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

export default Post;
