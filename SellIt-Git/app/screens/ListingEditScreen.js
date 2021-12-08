import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppFormImagePicker from "../components/AppFormImagePicker";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  Price: Yup.number().required().label("Price"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1).label("Image"),
});
export default function ListingEditScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, { resetForm }) => {
    setUploadVisible(true);
    setProgress(0);
    const result = await listingsApi.addListing(listing, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not save listing");
    }

    resetForm();
  };

  return (
    <View style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Formik
        initialValues={{
          title: "",
          Price: "",
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormImagePicker name="images" placeholder="img" />
            <AppFormField
              name="title"
              autoCorrect={false}
              placeholder="Title"
              keyboardType="default"
            />
            <AppFormField
              name="Price"
              autoCorrect={false}
              placeholder="Price"
              keyboardType="number-pad"
            />

            <AppFormField
              name="description"
              autoCapitalize="none"
              autoCorrect={false}
              multiline
              numberOfLines={3}
              placeholder="Description"
            />

            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
