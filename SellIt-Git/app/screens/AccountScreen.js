import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#5C7AEA",
      iconColor: "white",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "#082032",
      iconColor: "white",
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <ListItem
          title="Vishal Sony"
          subtitle="vishalsonyabc@gmail.com"
          img={{
            uri: "https://pbs.twimg.com/profile_images/1346163669034442755/zRJuFw4O_400x400.jpg",
          }}
        />
      </View>
      <View style={styles.account}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  size={55}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={item.icon.iconColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.account}>
        <ListItem
          title="Log Out"
          ImageComponent={
            <Icon
              name="logout"
              backgroundColor="#B61919"
              iconColor="white"
              size={55}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F7F6F2",
    flex: 1,
  },
  account: {
    marginVertical: 15,
    backgroundColor: "white",
  },
});
