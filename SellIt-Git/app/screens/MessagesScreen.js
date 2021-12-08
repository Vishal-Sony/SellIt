import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListDeleteAction from "../components/ListDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Vishal",
    description: "ssup bruh",
    image: {
      uri: "https://pbs.twimg.com/profile_images/1346163669034442755/zRJuFw4O_400x400.jpg",
    },
  },
  {
    id: 2,
    title: "Askeladd",
    description: "oppai",
    image: {
      uri: "https://static.wikia.nocookie.net/vinlandsaga/images/e/ec/IMG_20200127_020939.jpg/revision/latest?cb=20200126221124",
    },
  },
  {
    id: 3,
    title: "Knukles",
    description: "Do u no de wae",
    image: { uri: "https://i.ytimg.com/vi/P31z2qbErpc/maxresdefault.jpg" },
  },
];
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDeletion = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            img={item.image}
            onPress={() => {}}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDeletion(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
});
