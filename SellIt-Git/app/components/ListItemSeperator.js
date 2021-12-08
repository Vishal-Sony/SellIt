import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItemSeperator = () => {
  return <View style={styles.container}></View>;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 2,
    backgroundColor: "#F3F1F5",
  },
});
