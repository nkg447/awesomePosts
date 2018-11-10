import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, RefreshControl } from "react-native";
import { Spinner } from "native-base";
import Post from "../../../Post/Post";

export default class FeedsScreen extends Component {
  state = {
    posts: [],
    dataReceived: false
  };

  static navigationOptions = {
    title: "Awesome Posts"
  };

  fetchData() {
    if (!this.state.dataReceived) {
      fetch(
        'https://burger-builder447.firebaseio.com/posts.json?orderBy="$key"&limitToLast=10'
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            posts: Object.keys(res)
              .map(key => {
                return {
                  ...res[key],
                  postId: key
                };
              })
              .reverse(),
            dataReceived: true
          });
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  }

  refreshHandler = () => {
    console.log("ref");

    this.setState({
      dataReceived: false
    });
    this.fetchData();
  };

  render() {
    this.fetchData();
    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={!this.state.dataReceived}
              onRefresh={this.refreshHandler}
            />
          }
          data={this.state.posts}
          renderItem={info => (
            <Post
              title={info.item.title}
              userId={info.item.userId}
              pressedPost={() =>
                this.props.navigation.push("Post", {
                  postId: info.item.postId,
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
