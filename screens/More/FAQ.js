import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FAQ = () => {
  const faqs = [
    {
        question: 'How is this app used in the mission office?',
        answer: 'The mission office...',
    },
    {
        question: 'Is this a real app?',
        answer: 'It will be!',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.questionContainer}>
            <Text style={styles.question}>{faq.question}</Text>
            <FontAwesome name={expandedIndex === index ? 'caret-up' : 'caret-down'} size={20} color="#333" />
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqContainer: {
    marginBottom: 15,
    width: '100%',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  answerContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQ;