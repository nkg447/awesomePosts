import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import FeedsScreen from "./FeedsScreen/FeedsScreen";
import PostScreen from "./PostScreen/PostScreen";
import UserScreen from "./UserScreen/UserScreen";

export default StackNavigator({
  Feeds: { screen: FeedsScreen },
  Post: { screen: PostScreen },
  User: { screen: UserScreen }
});
