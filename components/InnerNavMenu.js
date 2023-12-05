// // InnerNavMenu.js
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// const InnerNavMenu = ({ links, onPressLink }) => {
//   return (
//     <View style={styles.container}>
//       {links.map((link, index) => (
//         <TouchableOpacity key={index} onPress={() => onPressLink(link)}>
//           <Text style={styles.link}>{link}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   link: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "blue",
//     marginBottom: 10, // Add margin to separate each link
//   },
// });

// export default InnerNavMenu;
