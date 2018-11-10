import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import CreatePostScreen from "./CreatePostScreen/CreatePostScreen";

export default StackNavigator({
  CreatePost: { screen: CreatePostScreen }
});
