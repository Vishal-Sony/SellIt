import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView
        style={{ backgroundColor: "#393E46", flex: 1, flexDirection: "row" }}
      >
        <View style={{ marginLeft: 15, marginTop: 15 }}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View
          style={{
            marginRight: 15,
            marginTop: 15,
            position: "absolute",
            right: 0,
          }}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={32}
          />
        </View>
      </SafeAreaView>
      <Image
        style={styles.img}
        source={{
          uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
    </SafeAreaView>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393E46",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    flex: 10,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
