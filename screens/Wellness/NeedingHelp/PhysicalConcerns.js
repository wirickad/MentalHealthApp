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

const PhysicalConcerns = () => {
  const { width } = useWindowDimensions();

  const linkOptions = [
    {
      key: "23A",
      title: "Are you having difficulty learning to work hard?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title2&lang=eng#title2",
    },
    {
      key: "24B",
      title: "Are you having difficulty staying healthy and energetic?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title3&lang=eng#title3",
    },
    {
      key: "24C",
      title:
        "Are you having difficulty managing head, stomach, or muscle pains?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title4&lang=eng#title4",
    },
    {
      key: "26D",
      title: "Are you having difficulty sleeping or going to bed on time?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title5&lang=eng#title5",
    },
    {
      key: "27E",
      title: "Are you having difficulty getting up on time?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title6&lang=eng#title6",
    },
    {
      key: "27F",
      title: "Are you having difficulty eating healthy foods?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title7&lang=eng#title7",
    },
    {
      key: "28G",
      title: "Are you having difficulty getting motivated to exercise?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-physical-demands?id=title8&lang=eng#title8",
    },
    // {
    //   key: "",
    //   title: "",
    //   link: "",
    // },
  ];

  const handleViewResource = () => {
    // Replace 'twitter://' with the app scheme of the app you want to open
    const appScheme =
      "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life?lang=eng";

    // Check if the app is installed before trying to open it
    Linking.canOpenURL(appScheme).then((supported) => {
      if (supported) {
        Linking.openURL(appScheme);
      } else {
        console.warn(`App not installed: ${appScheme}`);
        // You can provide feedback to the user that the app is not installed
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Physical Concerns</Text>
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
    backgroundColor: "rgb(237, 92, 92)",
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

export default PhysicalConcerns;
