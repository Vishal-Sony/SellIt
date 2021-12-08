import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function AppButton({ title, onClick, color, style }) {
  return (
    <TouchableHighlight
      onPress={onClick}
      style={[styles.button, { backgroundColor: color }, style]}
      underlayColor="#3D2C8D"
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    // backgroundColor: "tomato",
    borderRadius: 25,
    width: "45%",
    height: "37%",
    margin: 7,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    textTransform: "uppercase",
    fontFamily: "sans-serif-condensed",
  },
});
