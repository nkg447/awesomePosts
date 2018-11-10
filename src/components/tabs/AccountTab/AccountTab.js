import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import AccountScreen from "./AccountScreen/AccountScreen";

export default StackNavigator({
  Account: { screen: AccountScreen }
});
