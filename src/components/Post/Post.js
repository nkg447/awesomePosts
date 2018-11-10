import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, CardItem, Body, Text } from "native-base";
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
      <Card style={styles.postContainer}>
        <CardItem header button onPress={this.props.pressedUser}>
          <View>
            <TextBox>{this.state.username}</TextBox>
          </View>
        </CardItem>
        <CardItem button onPress={this.props.pressedPost}>
          <Body>
            <Text>{this.props.title}</Text>
          </Body>
        </CardItem>
      </Card>
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
