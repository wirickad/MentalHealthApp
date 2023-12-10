import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const VirtualTherapistScreen = () => {
  const navigation = useNavigation();
  const [inputMessage, setInputMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef();

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") {
      Alert.alert("Error", "Please enter a message.");
      return;
    }

    // Add the user's message to the conversation
    setConversation((prevConversation) => [
      ...prevConversation,
      { type: "user", text: inputMessage },
    ]);

    // Set typing indicator
    setIsTyping(true);

    // Simulate a delay to mimic a response from the virtual therapist
    setTimeout(() => {
      // Clear typing indicator
      setIsTyping(false);

      // Add the therapist's response to the conversation
      setConversation((prevConversation) => [
        ...prevConversation,
        {
          type: "therapist",
          text: "I am excited to work with you. Since I am still being developed, I am unable to connect you to a therapist, but please check back soon.",
        },
      ]);

      // Scroll to the bottom of the conversation
      scrollToBottom();
    }, 3000);

    // Clear the input field after sending the message
    setInputMessage("");
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    // Scroll to the bottom when the component mounts
    scrollToBottom();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Virtual Therapist</Text>

      <ScrollView
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContentContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollToBottom()}
      >
        {conversation.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.type === "user"
                ? styles.userMessage
                : styles.therapistMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
        {isTyping && (
          <View style={styles.typingIndicator}>
            <Text style={styles.typingText}>Therapist is typing...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#759CD3",
    padding: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  chatContentContainer: {
    paddingVertical: 0,
  },
  messageContainer: {
    maxWidth: "50%",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#EFEFEF",
  },
  therapistMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#D3D3D3",
  },
  messageText: {
    fontSize: 16,
  },
  typingIndicator: {
    alignSelf: "flex-start",
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  typingText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#EFEFEF",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#759CD3",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default VirtualTherapistScreen;
