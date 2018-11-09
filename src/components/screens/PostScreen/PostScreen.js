import React, { Component } from "react";
import PostTitle from "../../UI/PostTitle/PostTitle";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

class PostScreen extends Component {
  state = {
    dataReceived: false,
    userId: null,
    username: null,
    id: null,
    title: null,
    body: null
  };

  static navigationOptions = {
    title: "Awesome Posts"
  };

  fetchData() {
    if (!this.state.dataReceived) {
      fetch(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.props.navigation.getParam("postId", "key-undef")
      )
        .then(res => res.json())
        .then(post => {
          this.setState({
            ...post,
            dataReceived: true
          });
          console.log("post");
          console.log(post);
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      fetch(
        "https://jsonplaceholder.typicode.com/users/" +
          this.props.navigation.getParam("userId", "key-undef")
      )
        .then(res => res.json())
        .then(user => {
          this.setState({ username: user.username });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  }

  render() {
    this.fetchData();
    console.log(this.state);

    return (
      <View>
        <TouchableNativeFeedback
          onPress={() =>
            this.props.navigation.push("User", {
              userId: this.state.userId
            })
          }
        >
          <View style={styles.userContainer}>
            <Text style={styles.userText}>{this.state.username}</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.postContainer}>
          <PostTitle>{this.state.title}</PostTitle>
          <Text>{this.state.body}</Text>
        </View>
      </View>
    );
  }
}

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
  },
  postContainer: {
    borderColor: "#eee",
    borderWidth: 2,
    margin: 5,
    padding: 10
  }
});

export default PostScreen;
