import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import "../../style/global.css";

import { Pressable } from "react-native";
import AnimatedTabIcon from "@/components/tabs/pill";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: 6,
          marginLeft: 3,
          marginRight: 3,
        },
        tabBarStyle: {
          backgroundColor: "#d3c4e3",
          borderRadius: 50,
          marginBottom: 36,
          marginHorizontal: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth:1,
          borderColor:'transparent'
        },

        // tabBarButton: (props) => (
        //   <Pressable
        //     {...props}
        //     android_ripple={{ color: "transparent" }}
        //     className="active:opacity-100"
        //   />
        // ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              iconName="home"
              pillBg="#8f95d3"
              iconColor="black"
              label="Home"
              isFocused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              iconName="search"
              pillBg="#8f95d3"
              iconColor="black"
              label="Search"
              isFocused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              iconName="bookmark"
              pillBg="#8f95d3"
              iconColor="black"
              label="Saved"
              isFocused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <AnimatedTabIcon
              iconName="person-circle"
              pillBg="#8f95d3"
              iconColor="black"
              label="Profile"
              isFocused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
