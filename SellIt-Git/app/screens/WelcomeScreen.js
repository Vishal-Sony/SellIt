// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  // const onClick = () => {
  //   console.log("click");
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", flex: 10 }}>
        <Image
          style={{ height: "100%", width: "100%", flex: 1 }}
          source={require("../assets/logo.png")}
        />

        <Image
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "contain",
            flex: 1,
          }}
          source={require("../assets/background.jpg")}
        />
      </View>
      <View style={{ flexDirection: "row", bottom: 20 }}>
        <AppButton
          title="login"
          onClick={() => navigation.navigate("Login")}
          color="#5C7AEA"
        />
        <AppButton
          title="Register"
          onClick={() => navigation.navigate("Register")}
          color="#082032"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
