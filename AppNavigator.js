import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Wellness from "./screens/Wellness";
import Emergency from "./screens/Emergency";
import User from "./screens/User";
import More from "./screens/More";
import ForMe from "./screens/Emergency/ForMe";
import Settings from "./screens/More/Settings";
import NewContact from "./screens/More/NewContact";
import AdjustingLife from "./screens/Wellness/AdjustingLife";
import DailyCheckIn from "./screens/Wellness/DailyCheckIn";
import NeedingHelp from "./screens/Wellness/NeedingHelp";
import PhysicalConcerns from "./screens/Wellness/NeedingHelp/PhysicalConcerns";
import GeneralConcerns from "./screens/Wellness/NeedingHelp/GeneralConcerns";
import EmotionalConcerns from "./screens/Wellness/NeedingHelp/EmotionalConcerns";
import IntellectualConcerns from "./screens/Wellness/NeedingHelp/IntellectualConcerns";
import SocialConcerns from "./screens/Wellness/NeedingHelp/SocialConcerns";
import SpiritualConcerns from "./screens/Wellness/NeedingHelp/SpiritualConcerns";
//import ForMyCompanion from './screens/Emergency/ForMyCompanion';

// Tab navigator
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
      <Tab.Screen name="Wellness" component={WellnessStackNavigator} />
      <Tab.Screen name="Help" component={EmergencyStackNavigator} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

// Emergency Navigator
const Stack = createStackNavigator();

const EmergencyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Emergency">
      <Stack.Screen name="Help" component={Emergency} />
      <Stack.Screen name="ForMe" component={ForMe} />
      {/* <Stack.Screen name="ForMyCompanion" component={ForMyCompanion} /> */}
    </Stack.Navigator>
  );
};

// More navigator
const MoreStack = createStackNavigator();

const MoreStackNavigator = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
      <MoreStack.Screen name="Settings" component={Settings} />
      <MoreStack.Screen name="NewContact" component={NewContact} />
    </MoreStack.Navigator>
  );
};

const WellnessStack = createStackNavigator();

const WellnessStackNavigator = () => {
  return (
    <WellnessStack.Navigator>
      <WellnessStack.Screen name="Wellness" component={Wellness} />
      <Stack.Screen name="AdjustingLife" component={AdjustingLife} />
      <Stack.Screen name="DailyCheckIn" component={DailyCheckIn} />
      <Stack.Screen name="NeedingHelp" component={NeedingHelp} />
      <Stack.Screen name="GeneralConcerns" component={GeneralConcerns} />
      <Stack.Screen name="PhysicalConcerns" component={PhysicalConcerns} />
      <Stack.Screen name="EmotionalConcerns" component={EmotionalConcerns} />
      <Stack.Screen
        name="IntellectualConcerns"
        component={IntellectualConcerns}
      />
      <Stack.Screen name="SocialConcerns" component={SocialConcerns} />
      <Stack.Screen name="SpiritualConcerns" component={SpiritualConcerns} />
      {/* <Stack.Screen name="EmergencyConcerns" component={EmergencyConcerns} /> */}
    </WellnessStack.Navigator>
  );
};

export {
  AppNavigator,
  EmergencyStackNavigator,
  MoreStackNavigator,
  WellnessStackNavigator,
};
