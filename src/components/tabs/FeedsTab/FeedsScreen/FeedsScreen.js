import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Post from "../../../Post/Post";

export default class FeedsScreen extends Component {
  state = {
    posts: [],
    postsCapacity: 10
  };

  static navigationOptions = {
    title: "Awesome Posts"
  };

  componentWillMount() {
    if (this.state.posts.length == 0) {
      fetch("https://burger-builder447.firebaseio.com/posts.json")
        .then(res => res.json())
        .then(res => {
          this.setState({
            posts: Object.keys(res).map(key => {
              return res[key];
            })
          });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.posts}
          renderItem={info => (
            <Post
              title={info.item.title}
              userId={info.item.userId}
              pressedPost={() =>
                this.props.navigation.push("Post", {
                  postId: info.item.id,
                  userId: info.item.userId
                })
              }
              pressedUser={() =>
                this.props.navigation.push("User", {
                  userId: info.item.userId
                })
              }
            >
              {info.item.body}
            </Post>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
