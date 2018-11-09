import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import FeedsScreen from "./src/components/screens/FeedsScreen/FeedsScreen";
import PostScreen from "./src/components/screens/PostScreen/PostScreen";
import UserScreen from "./src/components/screens/UserScreen/UserScreen";

export default StackNavigator({
  Feeds: { screen: FeedsScreen },
  Post: { screen: PostScreen },
  User: { screen: UserScreen }
});
