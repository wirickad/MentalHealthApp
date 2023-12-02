import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Wellness from "./screens/Wellness";
import Emergency from "./screens/Emergency";
import User from "./screens/User";
import More from "./screens/More";
import ForMe from './screens/Emergency/ForMe'; 
//import ForMyCompanion from './screens/Emergency/ForMyCompanion';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
        tabBarIcon: ({ color, size }) => {
          let iconComponent;
          let iconName;

          if (route.name === "Wellness") {
            iconName = "md-heart";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          } else if (route.name === "Help") {
            iconName = "md-alert";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          } else if (route.name === "User") {
            iconName = "md-person";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          } else if (route.name === "More") {
            iconName = "md-menu";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          }

          return iconComponent;
        },
      })}
    >
      <Tab.Screen name="Wellness" component={Wellness} />
      <Tab.Screen name="Help" component={EmergencyStackNavigator}  />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const EmergencyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Emergency">
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="ForMe" component={ForMe} />
      {/* <Stack.Screen name="ForMyCompanion" component={ForMyCompanion} /> */}
    </Stack.Navigator>
  );
};



export {AppNavigator, EmergencyStackNavigator} ;
