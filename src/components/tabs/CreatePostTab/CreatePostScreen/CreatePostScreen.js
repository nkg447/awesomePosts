import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Input, Textarea, Button, Text } from "native-base";

class CreatePostScreen extends Component {
  state = {
    title: null,
    body: null
  };

  static navigationOptions = {
    title: "Create Post"
  };

  titleChangeHandler = value => {
    this.setState({
      title: value
    });
  };
  bodyChangeHandler = value => {
    this.setState({
      body: value
    });
  };
  postHandler = () => {
    fetch("https://burger-builder447.firebaseio.com/posts.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: this.props.screenProps.username,
        timestamp: Math.floor(Date.now() / 1000)
      })
    });
    this.props.navigation.navigate("FeedsTab");
  };

  render() {
    return (
      <View>
        <Form>
          <Item>
            <Input onChangeText={this.titleChangeHandler} placeholder="Title" />
          </Item>
          <Textarea
            onChangeText={this.bodyChangeHandler}
            rowSpan={5}
            bordered
            placeholder="Body"
          />
        </Form>
        <View style={{ alignItems: "center" }}>
          <Button onPress={this.postHandler}>
            <Text>Post</Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default CreatePostScreen;
