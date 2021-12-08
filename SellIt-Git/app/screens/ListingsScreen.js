import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import Card from "../components/Card";
import Constants from "expo-constants";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
// const listings = [
//   {
//     id: 1,
//     title: "Boobies for sale",
//     price: "1500",
//     image: {
//       uri: "https://images.pexels.com/photos/2495905/pexels-photo-2495905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     },
//   },
//   {
//     id: 2,
//     title: "Table Lamp for sale",
//     price: "100",
//     image: {
//       uri: "https://images.pexels.com/photos/5094543/pexels-photo-5094543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     },
//   },
// ];

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <View style={styles.container}>
      {error && (
        <>
          <Text style={{ color: "black" }}>Couldn't retrive listings.</Text>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imgUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
