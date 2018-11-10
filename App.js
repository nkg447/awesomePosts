import React, { Component } from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import FeedsTab from "./src/components/tabs/FeedsTab/FeedsTab";
import CreatePostTab from "./src/components/tabs/CreatePostTab/CreatePostTab";
import Icon from "react-native-vector-icons/FontAwesome";

export default TabNavigator(
  {
    FeedsTab: { screen: FeedsTab },
    CreatePostTab: { screen: CreatePostTab }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        console.log(navigation);

        if (routeName === "FeedsTab") {
          iconName = "feed";
        } else if (routeName === "CreatePostTab") {
          iconName = "plus-square-o";
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
