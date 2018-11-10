import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Input, Textarea, Button, Text } from "native-base";

class CreatePostScreen extends Component {
  state = {
    title: null,
    body: null
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
          <Button>
            <Text>Post</Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default CreatePostScreen;
