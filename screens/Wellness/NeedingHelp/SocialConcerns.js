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

const SocialConcerns = () => {
  const { width } = useWindowDimensions();

  const linkOptions = [
    {
      key: "35A",
      title: "Are you having difficulty talking with strangers?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title_number1",
    },
    {
      key: "36B",
      title: "Are you having difficulty wanting to be alone?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title_number2",
    },
    {
      key: "37C",
      title: "Are you having difficulty communicating openly with a companion?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title_number3",
    },
    {
      key: "38D",
      title: "Are you having difficulty loving the people?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title_number4",
    },
    {
      key: "38E",
      title: "Are you having difficulty getting along with mission leaders?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title6",
    },
    {
      key: "39F",
      title: "Are you having difficulty managing sexual or romantic feelings?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-social-demands?lang=eng#title_number6",
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
        <Text style={styles.title}>Social Concerns</Text>
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
    backgroundColor: "rgb(255, 142, 91)",
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

export default SocialConcerns;
