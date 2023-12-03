import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import MainArea from "./MainArea";

const NeedingHelp = () => {
  const { width } = useWindowDimensions();

  const quesOptions = [
    "Physical Questions",
    // "Intellectual Questions",
    // "Emotional Questions",
    // "Spiritual Questions",
    // "Social Questions",
    // "Emergency Questions",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you need help with?</Text>
      <MainArea links={quesOptions} />
      <View
        style={
          width >= 1600
            ? styles.outerDiv
            : width < 1600 && width >= 1100
            ? styles.midOuterDiv
            : styles.smallOuterDiv
        }
      >
        {/* Physical Questions */}
        <View>
          <Text style={styles.label}>Physical</Text>
          <TouchableOpacity style={styles.questionText}>
            Are you having trouble sleeping?
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionText}>
            Are you having unexpected head, stomach, or muscle pains?
          </TouchableOpacity>
        </View>

        {/* Intellectual Questions */}
        <View>
          <Text style={styles.label}>Intellectual</Text>
          <TouchableOpacity style={styles.questionText}>
            Are you having trouble focusing?
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionText}>
            Are you having trouble feeling motivated?
          </TouchableOpacity>
        </View>

        {/* Emotional Questions */}
        <View>
          <Text style={styles.label}>Emotional</Text>
          <TouchableOpacity style={styles.questionText}>
            Do you feel lonely and that you have no one to talk to?
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionText}>
            Are you feeling more stressed than usual?
          </TouchableOpacity>
        </View>

        {/* Spiritual Questions */}
        <View>
          <Text style={styles.label}>Spiritual</Text>
          <TouchableOpacity style={styles.questionText}>
            Are you having a hard time feeling the spirit?
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionText}>
            Do you feel that your testimony is wavering?
          </TouchableOpacity>
        </View>

        {/* Social Questions */}
        <View>
          <Text style={styles.label}>Social</Text>
          <TouchableOpacity style={styles.questionText}>
            Are you having a hard time getting along with people?
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionText}>
            Are you having a hard time loving people?
          </TouchableOpacity>
        </View>

        {/* Emergency Questions */}
        <View>
          <Text style={styles.label}>Emergency</Text>
          <TouchableOpacity style={styles.questionText}>
            Do you have a desire to harm yourself or others in any way?
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 15,
  },
  midOuterDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 15,
  },
  smallOuterDiv: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 15,
  },
  title: {
    fontSize: 60,
    marginBottom: 35,
  },
  text: {
    fontSize: 20,
  },
  label: {
    fontSize: 25,
    marginBottom: 8,
    marginTop: 8,
  },
  questionText: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 17,
    border: "1px solid #000",
    borderRadius: "5px",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
});

export default NeedingHelp;
