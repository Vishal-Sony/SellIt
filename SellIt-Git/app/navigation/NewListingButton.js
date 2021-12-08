import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function NewListingButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C7AEA",
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 25,
    borderColor: "white",
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
