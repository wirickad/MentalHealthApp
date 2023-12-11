import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SpiritualConcerns = () => {
  const { width } = useWindowDimensions();

  const linkOptions = [
    {
      key: "45A",
      title: "Are you having difficulty learning to strengthen your testimony?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-spiritual-demands?lang=eng#title_number1",
    },
    {
      key: "46B",
      title: "Are you having difficulty learning to repent?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-spiritual-demands?lang=eng#title_number2",
    },
    {
      key: "47C",
      title: "Are you having difficulty learning to pray meaningfully?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-spiritual-demands?lang=eng#title_number3",
    },
    {
      key: "47D",
      title: "Are you having difficulty learning to love the scriptures?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-spiritual-demands?lang=eng#title_number4",
    },
    {
      key: "47E",
      title: "Are you having difficulty learning to rely on the spirit?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-spiritual-demands?lang=eng#title_number5",
    },
    //   {
    //     key: "",
    //     title: "",
    //     link: "",
    //   },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Spiritual Concerns</Text>
        <Text style={styles.text}>
          Click on the question that will help you the most. This will lead you
          to resources to help.
        </Text>
        {linkOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            // styles={styles.option}
            onPress={() => {
              Linking.openURL(option.link);
            }}
            // onPress={handleViewResource(option)}
          >
            <Text
              style={width >= 450 ? styles.optionText : styles.optionTextMobile}
            >
              {option.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Align to the top
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(255, 205, 125)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 45,
    fontFamily: "Helvetica", // Set text font to Helvetica
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    display: "flex",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Helvetica", // Set text font to Helvetica
  },
  optionText: {
    display: "flex",
    justifyContent: "center",
    fontSize: 27,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 15, // Space between image and text
    border: "1px solid black",
    backgroundColor: "white",
    width: "60rem",
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: 10,
  },
  optionTextMobile: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 27,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 15, // Space between image and text
    border: "1px solid black",
    backgroundColor: "white",
    width: "22rem",
    margin: "auto",
    padding: 15,
    borderRadius: 10,
  },
});

export default SpiritualConcerns;
