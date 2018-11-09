import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Post from "../../Post/Post";

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
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => {
          this.setState({
            posts: res.map(post => ({ ...post, key: post.postId }))
          });
        });
    }
  }

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.posts}
          renderItem={info => (
            <Post
              title={info.item.title}
              userId={info.item.userId}
              pressed={() =>
                this.props.navigation.push("Post", {
                  postId: info.item.id,
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
