import React, { Component } from "react";
import PostTitle from "../../../UI/PostTitle/PostTitle";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, CardItem, Spinner } from "native-base";
import TextBox from "../../../UI/TextBox/TextBox";

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
        "https://burger-builder447.firebaseio.com/posts/" +
          this.props.navigation.getParam("postId", "key-undef") +
          ".json"
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
        "https://burger-builder447.firebaseio.com/users/" +
          this.props.navigation.getParam("userId", "key-undef") +
          ".json"
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
        {!this.state.dataReceived ? <Spinner /> : null}
        <Card>
          <CardItem
            header
            button
            onPress={() =>
              this.props.navigation.push("User", {
                userId: this.state.userId
              })
            }
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {this.state.username}
            </Text>
          </CardItem>
          <CardItem style={styles.postContainer}>
            <View>
              <Text style={{ fontWeight: "bold" }}>{this.state.title}</Text>
              <Text>{this.state.body}</Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    borderColor: "#eee",
    borderWidth: 2,
    margin: 5,
    padding: 10
  }
});

export default PostScreen;
