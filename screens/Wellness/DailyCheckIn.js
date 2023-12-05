import React, { useState, useEffect } from "react";
import {
  Alert,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessageComponent = ({ message, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000); // Auto-close after 2 seconds

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / 2000) * 100; // Update every 100 milliseconds
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{message}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
      </View>
    </View>
  );
};

const DailyCheckIn = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const [happyRating, setHappyRating] = useState(null);
  const [overcomeChallengesRating, setOvercomeChallengesRating] =
    useState(null);
  const [openCommunicationRating, setOpenCommunicationRating] = useState(null);
  const [anxietyDepressionRating, setAnxietyDepressionRating] = useState(null);
  const [comments, setComments] = useState("");

  const handleViewResource = () => {
    if (
      happyRating === null ||
      overcomeChallengesRating === null ||
      openCommunicationRating === null ||
      anxietyDepressionRating === null
    ) {
    } else {
      // Handle the button press (e.g., navigate to another screen)
      setMessage("Thank you for your answers");
      setShowMessage(true);
      // Replace this with your actual submission logic
    }
  };
  const closeMessage = () => {
    setShowMessage(false);
    setMessage("");
    navigation.navigate("Wellness");
  };
  const renderRadioButtons = (label, rating, setRating) => {
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.subText}>
          {label}
          <Text style={styles.requiredSymbol}>*</Text>
        </Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((value) => (
            <TouchableOpacity
              key={value}
              onPress={() => setRating(value)}
              style={[
                styles.radioButton,
                { backgroundColor: rating === value ? "tomato" : "white" },
              ]}
            >
              <Text style={{ color: rating === value ? "white" : "black" }}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Check-In:</Text>
      <View style={styles.centeredContainer}>
        <Text>
          Please answer the following questions by marking a number between 1-5
          <br></br>1 = Strongly Disagree 5 = Strongly Agree
        </Text>
        <br></br>
        {renderRadioButtons(
          "I feel happy as a missionary",
          happyRating,
          setHappyRating
        )}
        {renderRadioButtons(
          "I feel like I am able to overcome the daily challenges of missionary work",
          overcomeChallengesRating,
          setOvercomeChallengesRating
        )}
        {renderRadioButtons(
          "I communicate openly with my companion",
          openCommunicationRating,
          setOpenCommunicationRating
        )}
        {renderRadioButtons(
          "I am struggling with feelings of anxiety/depression",
          anxietyDepressionRating,
          setAnxietyDepressionRating
        )}
        <Text style={styles.subText}>Comments for my mission president:</Text>
        <TextInput
          style={styles.commentBox}
          multiline
          numberOfLines={4}
          value={comments}
          onChangeText={(text) => setComments(text)}
        />
        <TouchableOpacity onPress={handleViewResource} style={styles.button}>
          <Text style={styles.buttonText}>Submit Answers</Text>
        </TouchableOpacity>
      </View>
      {showMessage && (
        <MessageComponent message={message} onClose={closeMessage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    position: "absolute",
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 999, // Higher zIndex than other components
  },
  messageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressBarContainer: {
    width: "100%",
    height: 5,
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "tomato",
  },
  button: {
    marginTop: 16,
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16, // Adjust the padding as needed
  },
  centeredContainer: {
    width: "33%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8, // Add some space between title and subtext
  },
  questionContainer: {
    alignSelf: "stretch",
    marginBottom: 16,
  },
  subText: {
    fontSize: 16,
    color: "gray", // Adjust the color as needed
    textAlign: "left", // Align the text to the left
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  radioButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  commentBox: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
    width: "100%",
  },
  button: {
    marginTop: 16, // Adjust the margin as needed
    backgroundColor: "tomato", // Adjust the color as needed
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  requiredSymbol: {
    color: "red",
  },
});

export default DailyCheckIn;
