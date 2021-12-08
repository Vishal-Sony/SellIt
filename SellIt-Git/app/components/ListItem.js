import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  title,
  subtitle,
  img,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#F3F1F5" onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {img && <Image style={styles.img} source={img} />}
          <View style={styles.texts}>
            <Text style={styles.titleText}>{title}</Text>
            {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  texts: {
    top: 15,
    marginLeft: 15,
  },
  titleText: {
    color: "#082032",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "600",
  },
  subtitleText: {
    color: "#6e6969",
    fontSize: 14,
    fontFamily: "sans-serif-light",

    fontWeight: "400",
  },
});
