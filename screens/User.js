import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js/auto";

const User = () => {
  const { width } = useWindowDimensions();

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Happiness",
          data: [5, 5, 5, 3, 4, 5],
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 2,
        },
        {
          label: "Resilience",
          data: [3, 3, 4, 5, 4, 4],
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "Communication",
          data: [3, 3, 2, 4, 3, 3],
          backgroundColor: "orange",
          borderColor: "orange",
          borderWidth: 2,
        },
        {
          label: "Anxiety/Depression",
          data: [4, 4, 5, 4, 4, 4],
          backgroundColor: "blue",
          borderColor: "blue",
          borderWidth: 2,
        },
      ],
    };

    const chartOptions = {
      plugins: {
        title: {
          display: true,
          text: "Daily Check In Status (last 6 months)",
          font: {
            size: 16,
          },
        },
      },
    };

    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>User Dashboard</Text>
        <Text style={styles.title}>Sarah Jolynn Smith</Text>
        <View
          style={
            width >= 1825
              ? styles.threeColDiv
              : // : width < 1600 && width >= 1100
                // ? styles.midOuterDiv
                styles.mobileView
          }
        >
          <Image
            source={require("../image/profile.png")}
            style={styles.image}
          />
          <View style={styles.vertCenter}>
            <Text style={styles.text}>Mission: Louisiana Baton Rouge</Text>
            <Text style={styles.text}>Area: Purvis, MS</Text>
            <Text style={styles.text}>Companion: Sister Roberts</Text>
            <Text style={styles.text}>Expected Departure Date: 11/12/2020</Text>
          </View>
          <View
            style={
              width >= 450
                ? styles.lineGraph
                : // : width < 1600 && width >= 1100
                  // ? styles.midOuterDiv
                  styles.mobileGraph
            }
          >
            <canvas ref={chartRef} />
          </View>
        </View>
        <View
          style={
            width >= 1600
              ? styles.twoColDiv
              : // : width < 1600 && width >= 1100
                // ? styles.midOuterDiv
                styles.mobileView
          }
        >
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Therapist Information</Text>
            <TouchableOpacity>
              <Text style={styles.text}>Assigned Therapist: Dr. Suess</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Last Appointment: Tuesday, June 27</Text>
            <Text style={styles.text}>
              Next Appointment: Wednesday, July 17
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Emergency Contacts</Text>
            <Text style={styles.text}>
              Contact 1: Mother - Andrea (555)867-5309
            </Text>
            <Text style={styles.text}>
              Contact 2: Sister - Joan (555)123-4567
            </Text>
            <Text style={styles.text}>
              Contact 3: Uncle - Bryan (555)987-6543
            </Text>
          </View>
        </View>
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
    backgroundColor: "rgb(110, 140, 215)",
  },
  twoColDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  threeColDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    width: "65%",
  },
  mobileView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "80%", // Set width
    padding: 20,
    borderRadius: 10, // Rounded corners
    marginBottom: 10,
    alignItems: "center", // Center content
    justifyContent: "center", // Center content
    backgroundColor: "#EFEFEF", // Example background color
  },
  optionText: {
    fontSize: 18,
    marginTop: 10, // Space between image and text
  },
  vertCenter: {
    display: "flex",
    justifyContent: "center",
  },
  lineGraph: {
    display: "flex",
    alignItems: "center",
    borderRadius: "7px",
    backgroundColor: "white",
    height: "275px",
    width: "575px",
    margin: 15,
    padding: 6,
  },
  mobileGraph: {
    display: "flex",
    alignItems: "center",
    borderRadius: "7px",
    backgroundColor: "white",
    width: "95%",
    margin: 15,
    padding: 6,
  },
  image: {
    width: 250, // Example width
    height: 250, // Example height
    borderRadius: "7px",
    resizeMode: "contain", // Keep image aspect ratio
    float: "right",
    margin: 15,
  },
  box: {
    border: "1px solid black",
    borderRadius: "7px",
    padding: 30,
    margin: 15,
    backgroundColor: "rgb(239, 239, 239)",
  },
});

export default User;
