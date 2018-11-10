import React, { Component } from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import FeedsTab from "./components/tabs/FeedsTab/FeedsTab";
import CreatePostTab from "./components/tabs/CreatePostTab/CreatePostTab";
import AccountTab from "./components/tabs/AccountTab/AccountTab";
import Icon from "react-native-vector-icons/FontAwesome";

export default TabNavigator(
  {
    FeedsTab: { screen: FeedsTab },
    CreatePostTab: { screen: CreatePostTab },
    AccountTab: { screen: AccountTab }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "FeedsTab") {
          iconName = "feed";
        } else if (routeName === "CreatePostTab") {
          iconName = "plus-square-o";
        } else if (routeName === "AccountTab") {
          iconName = "user-o";
        }
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
