import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import ListItem from "../components/ListItem";

export default function ListingDetailScreen({ route }) {
  const listings = route.params;
  return (
    <View>
      <Image style={styles.img} source={listings.image} />
      <Text style={styles.titleText}>{listings.title}</Text>
      <Text style={styles.subtitleText}>${listings.price}</Text>
      <ListItem
        title="Askeladd"
        subtitle="15k Listings"
        img={{
          uri: "https://static.wikia.nocookie.net/vinlandsaga/images/e/ec/IMG_20200127_020939.jpg/revision/latest?cb=20200126221124",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#FEF1E6",
  },
  img: {
    width: "100%",
    height: 350,
  },
  titleText: {
    color: "#082032",
    fontSize: 25,
    fontFamily: "Roboto",
    marginBottom: 5,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 2,
    fontWeight: "500",
  },
  subtitleText: {
    color: "#39A388",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    paddingLeft: 20,
    paddingBottom: 11,
    fontWeight: "400",
  },
});
