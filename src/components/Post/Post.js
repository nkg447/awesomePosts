import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import PostTitle from "../UI/PostTitle/PostTitle";
import TextBox from "../UI/TextBox/TextBox";

class Post extends Component {
  state = {
    username: null
  };

  componentWillMount() {
    fetch(
      "https://burger-builder447.firebaseio.com/users/" +
        this.props.userId +
        ".json"
    )
      .then(res => res.json())
      .then(user => {
        this.setState({ username: user.username });
      });
  }

  render() {
    return (
      <View style={styles.postContainer}>
        <TouchableNativeFeedback onPress={this.props.pressedUser}>
          <View>
            <TextBox>{this.state.username}</TextBox>
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
  }
});

export default Post;
