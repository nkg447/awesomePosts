import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import FeedsScreen from "./src/components/screens/FeedsScreen/FeedsScreen";
import PostScreen from "./src/components/screens/PostScreen/PostScreen";

export default StackNavigator({
  Feeds: { screen: FeedsScreen },
  Post: { screen: PostScreen }
});
