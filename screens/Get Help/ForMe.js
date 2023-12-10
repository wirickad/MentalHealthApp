import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForMe = () => {
  const navigation = useNavigation();

  const options = [
    {
      key: "emergency",
      title: "Emergency",
      image: require("../../image/warning.png"),
    },
    {
      key: "feelingBlue",
      title: "Feeling Blue",
      image: require("../../image/blue.png"),
    },
    {
      key: "TalkToTherapist",
      title: "Talk to a Therapist",
      image: require("../../image/therapist.png"),
      onPress: () => navigateToScreen("TalkToTherapist"),
    },
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>For Me</Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.option}
            onPress={() => navigateToScreen(option.key)}
          >
            <Image source={option.image} style={styles.image} />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#759CD3",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
  },
  optionText: {
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});

export default ForMe;
