import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Wellness from "./screens/Wellness";
import User from "./screens/User";
import More from "./screens/More";
import GetHelp from "./screens/GetHelp";
import ForMe from "./screens/Get Help/ForMe";
import MessageSentScreen from "./screens/Get Help/MessageSentScreen";
import Settings from "./screens/More/Settings";
import AlertContacts from "./screens/More/AlertContacts";
import AdjustingLife from "./screens/Wellness/AdjustingLife";
import DailyCheckIn from "./screens/Wellness/DailyCheckIn";
import NeedingHelp from "./screens/Wellness/NeedingHelp";
import PhysicalConcerns from "./screens/Wellness/NeedingHelp/PhysicalConcerns";
import GeneralConcerns from "./screens/Wellness/NeedingHelp/GeneralConcerns";
import EmotionalConcerns from "./screens/Wellness/NeedingHelp/EmotionalConcerns";
import IntellectualConcerns from "./screens/Wellness/NeedingHelp/IntellectualConcerns";
import SocialConcerns from "./screens/Wellness/NeedingHelp/SocialConcerns";
import SpiritualConcerns from "./screens/Wellness/NeedingHelp/SpiritualConcerns";
import MoreSeriousConcerns from "./screens/Wellness/NeedingHelp/MoreSeriousConcerns";
import TalkToTherapist from "./screens/Get Help/TalkToTherapist";
import AccountSettings from "./screens/More/AccountSettings";
import FAQ from "./screens/More/FAQ";

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
          } else if (route.name === "Get Help") {
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
      <Tab.Screen name="Get Help" component={GetHelpStackNavigator} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

// GetHelp Navigator
const Stack = createStackNavigator();

const GetHelpStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="GetHelp">
      <Stack.Screen
        name="GetHelp"
        component={GetHelp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Talk To Therapist"
        component={TalkToTherapist}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="For Me" component={ForMe} />
      <Stack.Screen name="MessageSentScreen" component={MessageSentScreen} />
    </Stack.Navigator>
  );
};

// More navigator
const MoreStack = createStackNavigator();

const MoreStackNavigator = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen name="Settings" component={Settings} />
      <MoreStack.Screen name="FAQ" component={FAQ} />
      <MoreStack.Screen name="Alert Loved Ones" component={AlertContacts} />
      <MoreStack.Screen name="Account Settings" component={AccountSettings} />
    </MoreStack.Navigator>
  );
};

const WellnessStack = createStackNavigator();

const WellnessStackNavigator = () => {
  return (
    <WellnessStack.Navigator>
      <WellnessStack.Screen
        name="Wellness"
        component={Wellness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Adjusting to Missionary Life"
        component={AdjustingLife}
      />
      <Stack.Screen name="Daily Check-In" component={DailyCheckIn} />
      <Stack.Screen name="Needing Help?" component={NeedingHelp} />
      <Stack.Screen name="General Concerns" component={GeneralConcerns} />
      <Stack.Screen name="Physical Concerns" component={PhysicalConcerns} />
      <Stack.Screen name="Emotional Concerns" component={EmotionalConcerns} />
      <Stack.Screen
        name="More Serious Concerns"
        component={MoreSeriousConcerns}
      />
      <Stack.Screen
        name="Intellectual Concerns"
        component={IntellectualConcerns}
      />
      <Stack.Screen name="Social Concerns" component={SocialConcerns} />
      <Stack.Screen name="Spiritual Concerns" component={SpiritualConcerns} />
      {/* <Stack.Screen name="EmergencyConcerns" component={EmergencyConcerns} /> */}
    </WellnessStack.Navigator>
  );
};

export {
  AppNavigator,
  GetHelpStackNavigator,
  MoreStackNavigator,
  WellnessStackNavigator,
};
