import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
export default function OfflineNotice() {
  const netInfo = useNetInfo();
  console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#5C7AEA",
    alignItems: "center",
    zIndex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});
